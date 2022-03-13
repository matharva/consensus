import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import ShareBox from "../../../components/ShareBox";
import { useRouter } from "next/router";
import axios from "axios";
import { calculateTotalVotes } from "../../../helpers";
import OptionComponent from "../../../components/OptionComponent";

const AdminPage: React.FC = () => {
  const router = useRouter();
  const { id: pollId } = router.query;
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

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
    <div>
      <Navbar />
      <div className="md:flex  max-w-4xl mx-auto">
        <div className="p-5 max-w-xl md:mx-auto split-1">
          {/* Manage poll option */}
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
            <div className="split-1">
              <div className="text-2xl font-bold">Manage your Poll</div>
              <div className="text-gray-400">
                You can only edit your poll if it has no votes
              </div>
            </div>
            <div className="flex justify-evenly items-center my-6 split-2">
              <AiOutlineEdit className="text-2xl" />
              <MdDelete className="text-2xl" />
            </div>
          </div>
          {/* Manage poll option */}
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

export default AdminPage;
