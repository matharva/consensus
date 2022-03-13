import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6
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
    console.log("In use Effect");
    const fetchData = async () => {
      // Make a request for a user with a given ID
      const q = query(collection(db, "polls"), where("id", "==", pollId));
      const querySnapshot = await getDocs(q);
      let currentPoll;
      querySnapshot.forEach((doc) => {
        currentPoll = doc.data();
      });

      console.log("CurrentPoll: ", currentPoll);
      const { question, options: optionData }: any = currentPoll;
      setQuestion(question);
      // optionData.sort(function (a: any, b: any) {
      //   return b.votes - a.votes;
      // });
      // setOptions(optionData);
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
  }, []);

  useEffect(() => {
    currentDoc = collection(db, "polls");
    const unsub = onSnapshot(currentDoc, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const currDoc = doc.data();
        if (currDoc.id === pollId) {
          const optionData = currDoc.options;
          optionData.sort(function (a: any, b: any) {
            return b.votes - a.votes;
          });
          setOptions(optionData);
        }
      });
    });

    return () => unsub();
  }, []);

  return (
    <div className="md:flex  max-w-4xl mx-auto">
      <div className="p-5 max-w-xl md:mx-auto split-1">
        <div className="text-3xl font-bold my-8 mb-10">{question}</div>

        {/* Options */}
        <div className="relative transition-all ease-linear duration-1000">
          {/* <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          > */}
          {options.map((item, index) => {
            return (
              <OptionComponent
                {...item}
                total={totalVotes}
                key={item["id"]}
                userChoice={userChoice}
                // trans={index * 10}
              />
            );
          })}
          {/* </ReactCSSTransitionGroup> */}
        </div>
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
