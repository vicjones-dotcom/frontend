import React, { useState, useEffect } from "react";
import "./EmotionsList.scss";
import image from "../../assets/images/mindfulness.png";

const EmotionsList = () => {
  const [emotions, setEmotions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/emotions")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setEmotions(response);
      });
  }, []);
  return (
    <main className="emotions">
      <h1 className="emotions__heading">Emotions List</h1>
      <img
        src={image}
        alt="woman meditating in front of a building"
        className="emotions__img"
      />
      {emotions.map((emotion, index) => (
        <div className="emotions__list" key={index}>
          <button className="emotions__delete">X</button>
          <p>{emotion.type}</p>
          <p>{emotion.name}</p>
        </div>
      ))}
    </main>
  );
};
export default EmotionsList;
