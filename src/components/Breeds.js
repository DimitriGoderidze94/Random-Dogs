import React, { useEffect, useState } from "react";
import Container from "./Container";

const Breeds = () => {
  const [breed, setBreed] = useState("affenpinscher");
  const [imgNumber, setImgNumber] = useState(0);

  const chosenBreed = () => {
    setBreed(document.getElementById("breeds").value);
    setImgNumber(0);
  };

  const nextNumber = () => {
    setImgNumber(imgNumber + 9);
  };
  const prevNumber = () => {
    if (imgNumber >= 9) {
      setImgNumber(imgNumber - 9);
    }
  };
  const firstNumber = () => {
    setImgNumber(0);
  };
  useEffect(() => {
    const url = "https://dog.ceo/api/breeds/list/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        var breedArry = Object.keys(json.message);
        for (var i = 0; i < breedArry.length; i++) {
          document.getElementById("breeds").innerHTML +=
            "<option class='breedOptions'>" + breedArry[i] + "</option>";
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="selectContainer">
        <select
          id="breeds"
          onChange={() => {
            chosenBreed();
          }}
        ></select>
        <br />
        <label>Choose breed</label>
      </div>
      <div className="menu">
        <button
          className="nextButton"
          onClick={() => {
            nextNumber();
          }}
        >
          Next
        </button>
        <button
          className="prevButton"
          onClick={() => {
            prevNumber();
          }}
        >
          Previus
        </button>
        <button
          className="refreshButton"
          onClick={() => {
            firstNumber();
          }}
        >
          First Page
        </button>
      </div>
      <Container breed={breed} imgNumber={imgNumber} />
    </div>
  );
};

export default Breeds;
