export interface Question {
  id: string;
  value: string;
  options: Option[];
}

export interface Option {
  id: string;
  value: string;
}

export interface Result {
  success: boolean;
  error?: string;
  imageSource: string;
}

export interface Submission {
  name: string;
  providedResults: SelectedOption[];
}

export interface SelectedOption {
  questionId: string;
  optionId: string;
}

export interface GameStart {
  questions: Question[];
  name: string;
  imageSource: string;
}
