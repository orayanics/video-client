import { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [roomid, setRoomid] = useState("");

  return (
    <>
      <h1>TalkTherapy Teleconferencing</h1>
      <h3>Enter room id you want to join:</h3>
      <form>
        <input
          type="text"
          id="roomid"
          name="roomid"
          onChange={(e) => setRoomid(e.target.value)}
        />
        <Link to={`/meeting/${roomid}`}>
          <button>Join</button>
        </Link>
      </form>
    </>
  );
}
