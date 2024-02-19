import { useState } from "react";
import SelectedFloor from "./SelectedFloor";

function FloorTiles({ floor }) {
  const { floorNumber, rooms } = floor;
  const [showRooms, setShowRooms] = useState(false);

  return (
    <div className="option">
      <button
        className="btn btn-option"
        onClick={() => setShowRooms((prev) => !prev)}
      >
        {floorNumber}
      </button>
      {showRooms && (
        <>
          <h3>Available Rooms on floor {floorNumber}</h3>
          {rooms.map((room) => (
            <SelectedFloor
              floorNumber={floorNumber}
              rooms={room}
              key={room.id}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default FloorTiles;
