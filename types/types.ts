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
  pollLink: string;
  extraOptions: ExtraOptions;
}

export interface ExtraOptions {
  enableMultipleVotes: boolean;
  enableLogin: boolean;
  enableComments: boolean;
  enableCaptcha: boolean;
  enableEndDate: boolean;
}
export interface OptionFeatureProps {
  extraOptions: ExtraOptions;
  setExtraOptions: React.Dispatch<React.SetStateAction<ExtraOptions>>;
}
