import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { calculateTotalVotes, fetchData, getToken } from "../../../helpers";

// Components
import ShareBox from "../../../components/ShareBox";
import OptionComponent from "../../../components/OptionComponent";
// Firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import ShareModal from "../../../components/ShareModal";

const Results: React.FC = ({ onOpen, isOpen, onClose }: any) => {
  const router = useRouter();
  const { id: pollId } = router.query;

  // State
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [pollData, setPollData] = useState<any>(null);
  const [shareType, setShareType] = useState("");
  let currentDoc;
  let currentDocId;

  useEffect(() => {
    async function updateData() {
      console.log("Poll Id: ", pollId);
      if (pollId) {
        const { currentPoll, docId } = await fetchData(pollId);
        setPollData(currentPoll);
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

  useEffect(() => {
    currentDoc = collection(db, "polls");
    const unsub = onSnapshot(currentDoc, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const currDoc = doc.data();
        if (currDoc.id === pollId) {
          const updatedOptionData = currDoc.options;
          updatedOptionData.sort(function (a: any, b: any) {
            return b.votes - a.votes;
          });
          setOptions(updatedOptionData);
          setTotalVotes(calculateTotalVotes(updatedOptionData));
        }
      });
    });

    return () => unsub();
  }, []);

  return (
    <div className="md:flex  max-w-4xl mx-auto">
      <div className="p-5 max-w-xl md:mx-auto split-1">
        <div className="text-3xl font-bold my-8 mb-10">{question}</div>

        <ShareModal
          onClose={onClose}
          isOpen={isOpen}
          pollData={pollData}
          shareType={shareType}
        />
        {/* Options */}
        <div className="relative transition-all ease-linear duration-1000">
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
        </div>
        <div className="h-16"></div>
      </div>
      <ShareBox
        totalVotes={totalVotes}
        userChoice={userChoice}
        pollId={pollId}
        onOpen={onOpen}
        setShareType={setShareType}
      />
    </div>
  );
};

export default Results;
