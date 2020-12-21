import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FavoriteBorder, Favorite, ArrowUpward } from "@material-ui/icons";

import "./Popup.css";
import { addFavourite, removeFavourite } from "../store/actions/favourites";

const Popup = (props) => {
  const dispatch = useDispatch();

  const {
    title,
    owner,
    tags,
    link: questionLink,
    view_count,
    answer_count,
    creation_date,
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
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <Card>
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
                <a
                  href={profileLink}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    borderRadius: "50%",
                    borderWidth: "2px",
                    borderColor: "black",
                    borderStyle: "solid",
                    width: "64px",
                    height: "64px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Image src={profile_image} roundedCircle width="60" />
                </a>
                <div>{display_name}</div>
              </div>
              <div>
                <div style={{ fontWeight: "bold", width: "30rem" }}>
                  Question Title:{" "}
                  <span
                    dangerouslySetInnerHTML={{ __html: title }}
                    style={{
                      fontWeight: "normal",
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      paddingLeft: "2rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "6rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isFav ? (
                  <Favorite
                    style={{
                      color: "red",
                      marginBottom: "2rem",
                      cursor: "pointer",
                    }}
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
                justifyContent: "center",
                
              }}
            >
              <div style={{ width: "30rem", fontWeight: "bold", paddingLeft: "10px" }}>
                Question Desc :{"  "}
                <span
                  style={{
                    fontWeight: "normal",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "2rem",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "30rem",
                marginLeft: "9rem",
                fontWeight: "bold",
                marginTop: "1rem",
              }}
            >
              <div>
                Views :{" "}
                <span style={{ fontWeight: "normal" }}>{view_count}</span>
              </div>
              <div>
                Asked At :{" "}
                <span style={{ fontWeight: "normal" }}>
                  {new Date(creation_date).toDateString()}
                </span>
              </div>
              <div>
                Answers :{" "}
                <span style={{ fontWeight: "normal" }}>{answer_count}</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "1rem",
              }}
            >
              {tags.map((tag, key) => (
                <div
                  key={key}
                  style={{
                    padding: "6px 15px",
                    margin: 5,
                    backgroundColor: "#3e7ff0",
                    color: "#ffffff",
                    borderRadius: "5px",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <Button
                href={questionLink}
                variant="outline-primary"
                target="_blank"
              >
                View in Stackoverflow
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Popup;
