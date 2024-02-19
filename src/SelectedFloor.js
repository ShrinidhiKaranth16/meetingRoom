import { useState } from "react";
import "./selectedFloor.css";
import Slots from "./Slots";

function SelectedFloor({ rooms }) {
  console.log(rooms);
  const [showSlots, setShowSlots] = useState(false);

  return (
    <>
      <div className="btn-group">
        <button onClick={() => setShowSlots((prev) => !prev)}>
          {rooms.name}
        </button>
      </div>
      <div>{showSlots && <Slots room={rooms} />}</div>
    </>
  );
}

export default SelectedFloor;
