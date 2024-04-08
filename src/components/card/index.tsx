import React, { useState } from "react";
import Modal from "../modal";
import { IoDocumentTextOutline } from "react-icons/io5";

function Card({
  room,
  selectedCode,
}: {
  room: {
    name: string;
    slug: string | null;
    createdAt: Date;
  };
  selectedCode: string;
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-4 flex flex-col items-center justify-center rounded-2xl bg-white bg-opacity-5 p-4 shadow-lg backdrop-blur-lg backdrop-filter hover:bg-opacity-10">
      <div key={room.name}>
        <a className="text-xl font-bold text-white">Room</a>
        <div className="text-white">{room.slug || room.name}</div>

        <div className="text-sm font-bold text-gray-100 text-opacity-50">
          {room.createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          at{" "}
          {room.createdAt.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>

        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="mt-5 flex flex-row items-center justify-center space-x-2 rounded-lg bg-gray-100 bg-opacity-5 p-2 backdrop-blur-lg backdrop-filter hover:bg-gray-100 hover:bg-opacity-10"
          >
            <IoDocumentTextOutline
              className="text-2xl text-gray-100"
              size={15}
            />
            <div>Details</div>
          </button>
        </div>

        {isOpen && (
          <Modal
            selectedCode={selectedCode}
            roomName={room.name}
            setIsOpen={setIsOpen}
            visible={isOpen}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
