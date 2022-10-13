import React, { useState } from "react";
import data from "../pages/images.json";
import { Modal } from "../component/Modal";
import "../../styles/index.css";
import "../../styles/home.css";

export const Slide = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="wrapper">
      {data.data.map((item, index) => {
        return (
          <div key={index} className="wrapper-images">
            <div className="row photos">
              <div className="zoom image col-sm-6 col-md-4 col-lg-3 item">
                <img
                  style={{ width: "250px", height: "250px" }}
                  src={item.link}
                  alt={item.text}
                  onClick={() => handleClick(item, index)}
                />
                <h2>{item.text}</h2>
              </div>
            </div>
          </div>
        );
      })}
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
          setClickedImg={setClickedImg}
        />
      )}
    </div>
  );
};
