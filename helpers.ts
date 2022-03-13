import { Option, Poll } from "./types/types";

export const isEmptyOption = (data: Poll) =>
  data.options.map((item) => item.text !== "");

export const checkIfAllTrue = (arr: any) => arr.every((v: any) => v === true);

export const calculateTotalVotes = (data: Option[]) => {
  return data.reduce((acc, curr) => {
    return acc + curr.votes;
  }, 0);
};
