import React, { useEffect, useRef, useState } from "react";

const CalculatorApp = () => {
  const [state, setState] = useState([]);
  const [countryName, setCountryName] = useState("");
  const inputRef = useRef(null);

  function fetchWeather() {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => {
        throw new Error(err);
      });
  }

  function handleClick() {
    let inputValue = inputRef.current.value;

    const result = state.find((data) => data.name === inputValue);

    if (result) {
      setCountryName(result.name);
    } else {
      setCountryName("Not found");
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  // console.log(countryName)
  return (
    <>
      <div>
        <label htmlFor="weatherSearchbar">Search by Country:</label>
        <input
          type="text"
          name="weather"
          id="weatherSearchbar"
          ref={inputRef}
        />
        <button type="button" onClick={() => handleClick()}>
          Search Country
        </button>
        <p>{countryName}</p>
      </div>
    </>
  );
};

export default CalculatorApp;
