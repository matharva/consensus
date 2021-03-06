import { Option, Poll } from "./types/types";

// External Libraries
import { v4 as uuid } from "uuid";

// DB
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase/firebase";
// import { collection,  } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

export const APP_URL = "https://consensus-nine.vercel.app";

// export function getCurrentURL() {
//   return window.location.href;
// }

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
    pollLink: "",
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
    extraOptions: {
      enableMultipleVotes: false,
      enableLogin: false,
      enableComments: false,
      enableCaptcha: false,
      enableEndDate: false,
    },
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

export function checkPollOptions(options: Option[]) {
  const data = options.map((x) => x.text);

  const text_set = new Set();
  data.forEach((x) => text_set.add(x.trim()));

  return text_set.size === options.length;
}

export async function fetchData(pollId: string | string[]) {
  const q = query(collection(db, "polls"), where("id", "==", pollId));
  const querySnapshot = await getDocs(q);
  let currentPoll;
  let docId: any;
  querySnapshot.forEach((doc: any) => {
    docId = doc.id;
    console.log("id: ", doc.id);
    currentPoll = doc.data();
  });
  return { currentPoll, docId };
}

export const updateVotes = async (currentDocId: any, pollData: any) => {
  const pollRef = doc(db, "polls", `${currentDocId}`);

  return updateDoc(pollRef, pollData);
};
