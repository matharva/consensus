import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Poll } from "../../types/types";
import { checkIfAllTrue, isEmptyOption } from "../../helpers";

const newPollItem = {
  id: uuid(),
  question: "",
  publicLink: "",
  adminLink: "",
  options: [
    {
      id: uuid(),
      votes: 0,
      text: "",
    },
  ],
};
const NewPoll = () => {
  const [pollData, setPollData] = useState(newPollItem);
  const [createPollError, setCreatePollError] = useState("");

  const handleSubmit = () => {
    console.log(pollData);
    const createPoll = async (data: Poll) => {
      const response = await axios.post("http://localhost:5000/data", data);
      console.log("Create poll response: ", response);
    };

    const isQuestionEmpty = pollData.question === "";
    const isOptionEmpty = !checkIfAllTrue(isEmptyOption(pollData));
    if (isQuestionEmpty) setCreatePollError("Question cannot be empty");

    if (isOptionEmpty) setCreatePollError("Options for poll cannot be empty");

    if (!isOptionEmpty && !isQuestionEmpty) {
      setCreatePollError("");
      createPoll(pollData);
    }
  };

  const handleChange = (item: any, event: any) => {
    const currentIndex = pollData.options.findIndex((x) => x.id === item.id);

    if (currentIndex === -1) {
      console.log("index not in array");
      return;
    }

    setPollData((prev) => {
      return {
        ...prev,
        options: [
          ...prev.options.slice(0, currentIndex),
          { ...prev.options[currentIndex], text: event.target.value },
          ...prev.options.slice(currentIndex + 1),
        ],
      };
    });
  };
  const addOption = () => {
    setPollData({
      ...pollData,
      options: [
        ...pollData.options,
        {
          id: uuid(),
          votes: 0,
          text: "",
        },
      ],
    });
  };
  return (
    <div>
      <Navbar />
      <div className="m-6 md:max-w-4xl md:m-auto">
        <div className="text-3xl font-bold text-gray-800 mt-8">
          Create a Poll
        </div>
        <div className="font-semibold text-lg  text-gray-600 my-4 line leading-5">
          Complete below fields to create your poll
        </div>

        <div className="text-gray-600 font-semibold mt-8 mb-2">
          Poll Question
        </div>
        <textarea
          rows={4}
          value={pollData.question}
          onChange={(e) =>
            setPollData({ ...pollData, question: e.target.value })
          }
          className="shadow-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          placeholder="What is your favourite show?"
        />

        {pollData.options.map((item, index) => {
          return (
            <>
              <div className="text-gray-500 font-semibold mt-4">
                Poll Option {index + 1}
              </div>
              <input
                type="text"
                value={item.text}
                onChange={(e) => handleChange(item, e)}
                placeholder="Option"
                className="shadow-md p-4 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              />
            </>
          );
        })}

        <button
          onClick={addOption}
          className="bg-blue-500 mx-auto p-4 w-full text-white rounded-md mt-8"
        >
          Add another option
        </button>

        <hr className="h-0.5 bg-gray-100 mt-4" />

        <div className="text-red-600 text-center font-bold mt-4">
          {createPollError}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 mx-auto font-bold text-lg p-4 w-full text-white rounded-md mt-4 mb-8"
        >
          Create your Poll
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default NewPoll;
