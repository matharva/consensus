export interface Option {
  text: String;
  votes: number;
  id: String;
}

export interface Poll {
  id: string;
  question: string;
  options: Option[];
  publicLink: string;
  adminLink: string;
}
