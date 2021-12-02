import React, { useEffect } from "react";

const Container = (props) => {
  var url = "https://dog.ceo/api/breed/" + props.breed + "/images";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        document.getElementById("container").innerHTML = "";

        for (var i = props.imgNumber; i < props.imgNumber + 9; i++) {
          if (i < json.message.length) {
            document.getElementById("container").innerHTML +=
              "<img src=" + json.message[i] + " alt=" + props.breed + "/>";
          }
          if (i - 8 >= json.message.length) {
            document.getElementById("container").innerHTML =
              "<h2>No More <span>" + props.breed + "</span> dogs</h2>";
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [props.imgNumber, props.breed, url]);

  return (
    <div name={props.breed}>
      <div id="container"></div>
    </div>
  );
};

Container.defaultProps = {
  title: "dogs",
};

export default Container;
