import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const NewPoll = () => {
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
          className="shadow-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          placeholder="What is your favourite show?"
        />

        <div className="text-gray-500 font-semibold mt-4">Poll Option</div>
        <input
          type="text"
          placeholder="Option"
          className="shadow-md p-4 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />
        <div className="text-gray-500 font-semibold mt-4">Poll Option</div>
        <input
          type="text"
          placeholder="Option"
          className="shadow-md p-4 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />
        <div className="text-gray-500 font-semibold mt-4 ">Poll Option</div>
        <input
          type="text"
          placeholder="Option"
          className="shadow-md p-4 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />

        <button className="bg-blue-500 mx-auto p-4 w-full text-white rounded-md mt-8">
          Add another option
        </button>

        <hr className="h-0.5 bg-gray-100 mt-4" />

        <button className="bg-green-500 mx-auto font-bold text-lg p-4 w-full text-white rounded-md mt-4 mb-8">
          Create your Poll
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default NewPoll;
