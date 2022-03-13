import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import { Option } from "../../../types/types";
import ShareBox from "../../../components/ShareBox";

// import "../styles.css";
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

const Results: React.FC = () => {
  const router = useRouter();
  const { id: pollId } = router.query;
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  const calculateTotalVotes = (data: Option[]) => {
    return data.reduce((acc, curr) => {
      return acc + curr.votes;
    }, 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Make a request for a user with a given ID
      const response = await axios.get(`http://localhost:5000/data/${pollId}`);
      console.log(response.data);
      const { question, options: optionData } = response["data"];
      setQuestion(question);
      setOptions(optionData);
      setTotalVotes(calculateTotalVotes(optionData));
    };
    if (pollId) fetchData();
  }, [pollId]);

  return (
    <div className="">
      <Navbar />
      <div className="flex  max-w-4xl mx-auto">
        <div className="p-5 max-w-xl md:mx-auto split-1">
          <div className="text-3xl font-bold my-8 mb-10">{question}</div>

          {/* Options */}
          {options.map((item) => {
            return (
              <OptionComponent {...item} total={totalVotes} key={item["id"]} />
            );
          })}

          <div className="h-24"></div>
        </div>
        <ShareBox totalVotes={totalVotes} />
      </div>
      <Footer />
    </div>
  );
};

export default Results;
