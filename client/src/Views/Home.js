import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";

import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";

import { addQuestions, fetchQuestions } from "../store/actions/question";
import { fetchFavourites } from "../store/actions/favourites";
import Popup from "../components/Popup";

const Home = () => {
  const dispatch = useDispatch();
  const [showFavourite, setShowFavourite] = useState(false);
  const [togglePopup, setTogglePopup] = useState(false);
  const [question, setQuestion] = useState({});
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const isLoading = useSelector((state) => state.question.isLoading);
  const questions = useSelector((state) => state.question.questions);
  const hasMore = useSelector((state) => state.question.hasMore);
  const favourites = useSelector((state) => state.favourite.favourites);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchFavourites());
  }, [dispatch]);

  useEffect(() => {
    if (!showFavourite) {
      setFilteredQuestions(questions);
    } else {
      setFilteredQuestions(
        questions.filter((question) =>
          favourites.includes(question.question_id.toString())
        )
      );
    }
  }, [questions, showFavourite, favourites]);

  const loadMoreHandler = () => {
    dispatch(addQuestions());
  };

  console.log("Rendered");

  const handleOpen = (question) => {
    setQuestion(question);
    setTogglePopup(true);
  };

  const handleClose = () => {
    setTogglePopup(false);
  };

  const showFavouriteHandler = () => {
    setShowFavourite(!showFavourite);
  };

  return (
    <React.Fragment>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          style={{
            width: "45rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={showFavouriteHandler}
            />
            <label className="custom-control-label">Favourites</label>
          </div> */}

          <Switch onChange={showFavouriteHandler} checked={showFavourite} />
          <label style={{ paddingLeft: ".5rem" }}>Favourites</label>
        </div>

        {filteredQuestions.length > 0
          ? filteredQuestions.map((question, key) => (
              <div key={key} onClick={handleOpen.bind(this, question)}>
                <QuestionCard
                  question={question}
                  isFavourite={favourites.find(
                    (fav) => fav.toString() === question.question_id.toString()
                  )}
                />
              </div>
            ))
          : ""}
        {hasMore ? (
          <Button onClick={loadMoreHandler} style={{ marginTop: "1rem" }}>
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        ) : (
          ""
        )}
      </div>
      {togglePopup ? (
        <Popup
          question={question}
          handleClose={handleClose}
          isFavourite={favourites.find(
            (fav) => fav.toString() === question.question_id.toString()
          )}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Home;
