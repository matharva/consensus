import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import ShareBox from "../../../components/ShareBox";
import OptionComponent from "../../../components/OptionComponent";
import { calculateTotalVotes, getToken } from "../../../helpers";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const Results: React.FC = () => {
  const router = useRouter();
  const { id: pollId } = router.query;
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  let currentDoc;

  useEffect(() => {
    const fetchData = async () => {
      // Make a request for a user with a given ID
      const q = query(collection(db, "polls"), where("id", "==", pollId));
      const querySnapshot = await getDocs(q);
      let currentPoll;
      querySnapshot.forEach((doc) => {
        currentPoll = doc.data();
      });

      const { question, options: optionData }: any = currentPoll;
      setQuestion(question);
      optionData.sort(function (a: any, b: any) {
        return b.votes - a.votes;
      });
      setOptions(optionData);
      setTotalVotes(calculateTotalVotes(optionData));
    };
    if (pollId) {
      fetchData();
      const userData = getToken(pollId);
      if (userData) {
        console.log("User data: ", userData);
        setUserChoice(userData["userChoice"]["text"]);
      }
    }
  }, [pollId, options]);

  useEffect(() => {
    let currentData;
    currentDoc = collection(db, "polls");
    const unsub = onSnapshot(currentDoc, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const currentDoc = doc.data();
        const optionData = currentDoc.options;
        optionData.sort(function (a: any, b: any) {
          return b.votes - a.votes;
        });
        setOptions(optionData);
      });
    });

    return () => unsub();
  }, [currentDoc]);

  return (
    <div className="md:flex  max-w-4xl mx-auto">
      <div className="p-5 max-w-xl md:mx-auto split-1">
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

export default Results;
