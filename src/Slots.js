import "./slots.css";
function Slots({ room }) {
  return (
    <>
      <h4>Slots Available for {room.name} </h4>
      {room.slots.map((slot) => (
        <button className={`button ${slot.booked ? "button3" : ""}`}>
          {slot.time}
        </button>
      ))}
    </>
  );
}

export default Slots;
