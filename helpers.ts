import { Option, Poll } from "./types/types";

// External Libraries
import { v4 as uuid } from "uuid";

// DB
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";

export const APP_URL =
  location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://consensus-nine.vercel.app";

export const isEmptyOption = (data: Poll) =>
  data.options.map((item) => item.text !== "");

export const checkIfAllTrue = (arr: any) => arr.every((v: any) => v === true);

export const calculateTotalVotes = (data: Option[]) => {
  return data.reduce((acc, curr) => {
    return acc + curr.votes;
  }, 0);
};

export function setToken(data: any) {
  localStorage.setItem(`${data.pollId}`, JSON.stringify(data));
}
export function getToken(data: any) {
  const userData = localStorage.getItem(data);
  if (userData) return JSON.parse(userData);
}

export function createNewPoll() {
  return {
    id: uuid(),
    question: "",
    publicLink: "",
    adminLink: "",
    options: [
      {
        id: uuid(),
        votes: 0,
        text: "",
      },
      {
        id: uuid(),
        votes: 0,
        text: "",
      },
    ],
  };
}

export async function createPoll(data: Poll) {
  try {
    const docRef = await addDoc(collection(db, "polls"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
