import { useEffect, useState } from "react";
import FloorTiles from "./FloorTiles";

function App() {
  const [data, setData] = useState("");

  const fetchUserData = () => {
    fetch("http://localhost:8000/floor")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData((prev) => data);
        console.log(data.length);
      });
  };

  useEffect(function () {
    fetchUserData();
  }, []);

  return (
    <>
      <h1> Please select the floor</h1>
      {data.length > 0 &&
        data.map((floor) => (
          <FloorTiles floor={floor} key={floor.floorNumber} />
        ))}
    </>
  );
}

export default App;
