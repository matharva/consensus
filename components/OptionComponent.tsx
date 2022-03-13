import React from "react";

const OptionComponent = (props: any) => {
  // console.log("Data: ", props);
  const { text, id, votes, total } = props;
  let optionPercent;
  if (total === 0) optionPercent = 0;
  else optionPercent = Math.round((votes / total) * 100);
  return (
    <div
      className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 mb-10 shadow-lg shadow-green-200"
      style={{ borderWidth: "3px" }}
    >
      <div className="flex items-start justify-start flex-col w-full px-4 relative">
        <div className="text-2xl font-bold">{text}</div>
        <div className="w-full bg-gray-200 h-2 mt-4 mb-3 rounded">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${optionPercent}%` }}
          ></div>
        </div>
        <div className="text-sm font-bold">{votes} votes</div>
        <div
          className="absolute flex items-center justify-center bg-white rounded-full shadow-lg"
          style={{ top: "-40px", right: "-30px" }}
        >
          <div className="p-2 px-5 font-bold">{optionPercent}%</div>
        </div>
      </div>
    </div>
  );
};

export default OptionComponent;
