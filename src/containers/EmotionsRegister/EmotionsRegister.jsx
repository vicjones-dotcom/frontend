import React from "react";
import "./EmotionsRegister.scss";

const EmotionsRegister = () => {
  // const handleSubmit = (e) => {
  //   //Prevent the default behaviour of the form from reloading and losing the data
  //   e.preventDefault();
  //   //Get the data of the form into a JS object
  //   const requestBody = {
  //     type: e.target[0].value,
  //     name: e.target[1].value,
  //   };
  //   console.log(requestBody);
  // };
  // //Send the object
  // const options = {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(requestBody),
  // };
  // fetch("http://localhost:8080/emotions"),
  //   options
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       alert("added a new emotion!");
  //     });
  //   }
  const handleSubmit = (e) => {
    // 1. What does this do? Stops the page from reloading
    e.preventDefault();

    // 2. Get the data from our form, nicely into a javascript object
    //    ready for us to send
    const requestBody = {
      type: e.target[0].value,
      name: e.target[1].value,
    };
    console.log(requestBody);

    // 3. Ssend it!!
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    fetch("http://localhost:8080/emotion", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // 4. Show some indication that it's been sent/successful
        alert(
          "Successfully added emotion! Take a look at your Emotions List 🧘‍♀️"
        );
      });
  };
  return (
    <div className="emotions-register">
      <h1 className="emotions-register__heading">Register your Mood</h1>
      <form onSubmit={handleSubmit} className="emotions-register__form">
        <label htmlFor="emotion type">Emotion Type</label>
        <select
          name="emotion-type"
          id="type"
          className="emotions-register__input"
        >
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="neutral">Neutral</option>
        </select>
        <label htmlFor="emotion name">Emotion Name</label>
        <input type="text" className="emotions-register__input" autoSave="on" />
        <button className="emotions-register__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EmotionsRegister;
