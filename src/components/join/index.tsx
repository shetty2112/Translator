import { useRouter } from "next/router";
import { useState } from "react";
import { BsKeyboard } from "react-icons/bs";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState<string>("");
  const router = useRouter();
  return (
    <div className="flex items-center space-x-4 p-2 text-white">
      <label className="relative">
        <input
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          type="text"
          placeholder="Enter Room Name"
          className="rounded-md bg-white bg-opacity-30 p-2 text-white"
        />
        <BsKeyboard
          size={20}
          className="absolute right-2 top-1/2 -translate-y-1/2 transform text-white"
        />
      </label>

      <button
        disabled={!roomName}
        className={`lk-button ${
          !roomName && "pointer-events-none cursor-not-allowed"
        }`}
        onClick={() => router.push(`/rooms/${roomName}`)}
      >
        Join
      </button>
    </div>
  );
};

export default JoinRoom;
