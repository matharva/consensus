import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// External Libraries
import { v4 as uuid } from "uuid";

// Components
import { Poll } from "../../types/types";

// Helpers
import { checkIfAllTrue, createNewPoll, isEmptyOption } from "../../helpers";

// DB
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const NewPoll = () => {
  const router = useRouter();

  // States
  const [pollData, setPollData] = useState(createNewPoll());
  const [createPollError, setCreatePollError] = useState("");
  const [canShowRemove, setCanShowRemove] = useState(false);

  // State Handlers
  const handleSubmit = async () => {
    console.log(pollData);
    const createPoll = async (data: Poll) => {
      // return axios.post("http://localhost:5000/data", data);
      try {
        const docRef = await addDoc(collection(db, "polls"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // console.log("Create poll response: ", response);
    };

    // Create links
    pollData.publicLink = `https://consensus-nine.vercel.app/poll/${pollData.id}`;
    pollData.adminLink = `https://consensus-nine.vercel.app/poll/admin/${pollData.id}`;

    const isQuestionEmpty = pollData.question === "";
    const isOptionEmpty = !checkIfAllTrue(isEmptyOption(pollData));
    if (isQuestionEmpty) setCreatePollError("Question cannot be empty");
    else if (isOptionEmpty)
      setCreatePollError("Options for poll cannot be empty");

    if (!isOptionEmpty && !isQuestionEmpty) {
      setCreatePollError("");
      const res = await createPoll(pollData);
      console.log("Create post response: ", res);
      router.push(`/new-poll/${pollData.id}`);
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

  const handleRemovePollOption = (id: string) => {
    setPollData({
      ...pollData,
      options: [...pollData.options.filter((x) => x.id !== id)],
    });
  };

  useEffect(() => {
    if (pollData.options.length > 2) {
      setCanShowRemove(true);
    } else setCanShowRemove(false);
  }, [pollData]);
  return (
    <div className="m-6 md:max-w-2xl md:m-auto">
      <div className="text-3xl font-bold text-gray-800 mt-12">
        Create a Poll
      </div>
      <div className="font-semibold text-lg  text-gray-600 my-4 line leading-5">
        Complete below fields to create your poll
      </div>

      <div className="text-gray-600 font-semibold mt-8 mb-2">Poll Question</div>
      <textarea
        rows={4}
        value={pollData.question}
        onChange={(e) => setPollData({ ...pollData, question: e.target.value })}
        className="shadow-md p-4 w-full border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        placeholder="What is your favourite show?"
      />

      {pollData.options.map((item, index) => {
        return (
          <>
            <div className="flex items-center justify-between mt-4 mx-1">
              <div className="text-gray-500 font-semibold">
                Poll Option {index + 1}
              </div>
              {canShowRemove && (
                <div
                  className="text-red-500 font-semibold text-xs cursor-pointer translate-y-2"
                  onClick={(e) => handleRemovePollOption(item.id)}
                >
                  Remove
                </div>
              )}
            </div>
            <input
              type="text"
              value={item.text}
              onChange={(e) => handleChange(item, e)}
              placeholder="Option"
              className="shadow-md p-4 w-full mt-2 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
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

      <hr className="h-0.5  mt-4" />

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
  );
};

export default NewPoll;
