import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
import { Option, Poll } from "../../types/types";
import Link from "next/link";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getToken, setToken } from "../../helpers";
import { db } from "../../firebase/firebase";

const Choice = ({ data, setSelectedOption, isSelected }: any) => {
  const iconStyles = isSelected
    ? "p-2 bg-green-400"
    : "border-2 border-gray-100 p-3 bg-gray-100";
  const boxStyles = isSelected
    ? " border-2 border-green-400 shadow-green-200"
    : "";

  return (
    <div
      className={`transition-all duration-150 flex items-center justify-start p-4 rounded-md my-6 shadow-lg ${boxStyles}`}
      style={{ borderWidth: isSelected ? "3px" : "1px" }}
      onClick={() => setSelectedOption(data.id)}
      key={data.id}
    >
      <div
        className={`${iconStyles} rounded-full ml-4 flex items-center justify-center `}
      >
        {isSelected && <BsCheckLg color="white" className="text-sm" />}
      </div>
      <div className="text-xl pl-4">{data.text}</div>
    </div>
  );
};

const newItem = {
  id: "",
  question: "",
  publicLink: "",
  adminLink: "",
  options: [
    {
      id: "",
      votes: 0,
      text: "",
    },
    {
      id: "",
      votes: 0,
      text: "",
    },
  ],
};
const Poll = () => {
  const router = useRouter();
  const [pollData, setPollData] = useState<any>(newItem);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const { id: pollId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      // Make a request for a user with a given ID
      // const response = await axios.get(`http://localhost:5000/data/${pollId}`);
      const q = query(collection(db, "polls"), where("id", "==", pollId));
      const querySnapshot = await getDocs(q);
      let currentPoll;
      querySnapshot.forEach((doc) => {
        currentPoll = doc.data();
      });
      console.log("CurrentPoll: ", currentPoll);

      const { options: optionData, question }: any = currentPoll;
      setQuestion(question);
      setOptions(optionData);
      setPollData(currentPoll);
      console.log("Options: ", options);
    };
    if (pollId) {
      fetchData();
      const userData = getToken(pollId);
      if (userData) {
        console.log("User data: ", userData);
        setUserChoice(userData["userChoice"]["text"]);
      }
    }
  }, [pollId]);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const handleSubmit = async () => {
    const userChoice = pollData.options.filter(
      (x: any) => x.id === selectedOption
    )[0];
    userChoice.votes += 1;

    const updateVotes = async () => {
      // return axios.put(`http://localhost:5000/data/${pollId}`, pollData);
      const cityRef = doc(db, "polls", `${pollData}`);
      setDoc(cityRef, pollData);
      // console.log("ref: ", cityRef.);
    };
    const res = await updateVotes();
    const data = {
      pollId: pollId,
      userChoice: userChoice,
    };
    setToken(data);
    console.log(res);
    router.push(`/poll/result/${pollId}`);
    // const data = await res;
    // const response =
  };

  return (
    <div className="p-4 max-w-xl md:mx-auto">
      <div className="text-3xl font-bold my-8 mb-12">{question}</div>
      {/* Options */}
      {options.map((item: Option) => {
        return (
          <Choice
            data={item}
            setSelectedOption={setSelectedOption}
            isSelected={selectedOption === item.id}
          />
        );
      })}

      {userChoice ? (
        <div className="bg-green-200 p-4 w-full text-center rounded font-bold text-white text-xl my-4 mt-12 max-w-lg md:mx-auto cursor-pointer">
          Your vote is submitted
        </div>
      ) : (
        <div
          onClick={handleSubmit}
          className="bg-green-400 p-4 w-full text-center rounded font-bold text-white text-xl my-4 mt-12 max-w-lg md:mx-auto cursor-pointer"
        >
          Submit your vote
        </div>
      )}

      <Link href={`/poll/result/${pollId}`}>
        <div className="bg-gray-400 p-4 w-full text-center rounded font-bold text-white text-xl my-6 max-w-lg md:mx-auto cursor-pointer">
          Jump to result {">"}
        </div>
      </Link>
    </div>
  );
};

export default Poll;
