export interface DailyEntry {
  date: string;
  steps: number;
  pushups: number;
  pullups: number;
  optionalExerciseName?: string;
  optionalExerciseReps?: number;
  comment?: string;
}

export interface SummaryData {
  weekly: {
    steps: number;
    pushups: number;
    pullups: number;
  };
  total: {
    steps: number;
    pushups: number;
    pullups: number;
  };
}