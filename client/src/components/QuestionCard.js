import React from "react";
import { Card, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FavoriteBorder, Favorite, ArrowUpward } from "@material-ui/icons";

import { addFavourite, removeFavourite } from "../store/actions/favourites";

const QuestionCard = (props) => {
  const dispatch = useDispatch();

  const {
    title,
    owner,
    tags,
    // link: questionLink,
    // view_count,
    // answer_count,
    // creation_date,
    question_id,
  } = props.question;
  const { profile_image, display_name, link: profileLink } = owner;
  const isFav = props.isFavourite;

  const addFavHandler = (e) => {
    e.stopPropagation();
    dispatch(addFavourite(question_id));
  };

  const removeFavHandler = (e) => {
    e.stopPropagation();
    dispatch(removeFavourite(question_id));
  };

  return (
    <Card
      style={{
        width: "45rem",
        margin: "1rem",
        padding: "0.5rem",
        backgroundColor: "#ffffff",
      }}
    >
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "8rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={profileLink} onClick={(e) => e.stopPropagation()}>
              <Image src={profile_image} roundedCircle width="60" />
            </a>
            <div>{display_name}</div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            style={{
              width: "28rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "8rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isFav ? (
              <Favorite
                style={{ color: "red", marginBottom: "2rem", cursor: "pointer" }}
                onClick={removeFavHandler}
              />
            ) : (
              <FavoriteBorder
                style={{ marginBottom: "2rem", cursor: "pointer" }}
                onClick={addFavHandler}
              />
            )}

            <div style={{ display: "flex", flexDirection: "row" }}>
              <ArrowUpward />
              {"0"}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {tags.map((tag, key) => (
            <div
              key={key}
              style={{
                padding: 10,
                margin: 5,
                backgroundColor: "#aaffff",
                borderRadius: "10px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
