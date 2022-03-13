import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BsCheckLg } from "react-icons/bs";

const Poll = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-2xl md:mx-auto">
        <div className="text-3xl font-bold my-8 mb-12">
          What is your favourite movie?
        </div>
        {/* Options */}
        <div
          className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 shadow-lg shadow-green-200"
          style={{ borderWidth: "3px" }}
        >
          <div className="border-2 border-green-400 p-2 rounded-full ml-4 flex items-center justify-center bg-green-400">
            <BsCheckLg color="white" className="text-sm" />
          </div>
          <div className="text-xl pl-4">option1</div>
        </div>
        <div
          className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 shadow-lg shadow-green-200"
          style={{ borderWidth: "3px" }}
        >
          <div className="border-2 border-green-400 p-2 rounded-full ml-4 flex items-center justify-center bg-green-400">
            <BsCheckLg color="white" className="text-sm" />
          </div>
          <div className="text-xl pl-4">option1</div>
        </div>
        <div
          className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 shadow-lg shadow-green-200"
          style={{ borderWidth: "3px" }}
        >
          <div className="border-2 border-green-400 p-2 rounded-full ml-4 flex items-center justify-center bg-green-400">
            <BsCheckLg color="white" className="text-sm" />
          </div>
          <div className="text-xl pl-4">option1</div>
        </div>
        <div className="bg-green-400 p-4 w-full text-center rounded font-bold text-white text-xl my-4 mt-12 max-w-lg md:mx-auto">
          Submit your vote
        </div>
        <div className="bg-gray-300 p-4 w-full text-center rounded font-bold text-white text-xl my-6 max-w-lg md:mx-auto">
          Jump to result {">"}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Poll;
