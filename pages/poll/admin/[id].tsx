import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { calculateTotalVotes, fetchData, getToken } from "../../../helpers";

// Components
import ShareBox from "../../../components/ShareBox";
import OptionComponent from "../../../components/OptionComponent";

// Assets
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const AdminPage: React.FC = () => {
  const router = useRouter();
  const { id: pollId } = router.query;
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [userChoice, setUserChoice] = useState("");

  let currentDocId;
  useEffect(() => {
    async function updateData() {
      console.log("Poll Id: ", pollId);
      if (pollId) {
        const { currentPoll, docId } = await fetchData(pollId);
        currentDocId = docId;
        console.log("currentPoll: ", currentPoll);
        const { question, options: optionData }: any = currentPoll;
        optionData.sort(function (a: any, b: any) {
          return b.votes - a.votes;
        });
        setQuestion(question);
        setOptions(optionData);
        setTotalVotes(calculateTotalVotes(optionData));
        const userData = getToken(pollId);
        if (userData) {
          console.log("User data: ", userData);
          setUserChoice(userData["userChoice"]["text"]);
        }
      }
    }
    updateData();
  }, [pollId]);
  return (
    <div className="md:flex  max-w-4xl mx-auto">
      <div className="p-5 max-w-xl md:mx-auto split-1">
        {/* Manage poll option */}
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
          <div className="split-1">
            <div className="text-2xl font-bold pt-4">Manage your Poll</div>
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
            <OptionComponent
              {...item}
              total={totalVotes}
              key={item["id"]}
              userChoice={userChoice}
            />
          );
        })}
        <div className="h-16"></div>
      </div>
      <ShareBox
        totalVotes={totalVotes}
        userChoice={userChoice}
        pollId={pollId}
      />
    </div>
  );
};

export default AdminPage;
