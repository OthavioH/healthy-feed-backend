export interface Nutrition {
  id: string;
  userId: string;

  diaryCaloriesGoal: number;
  diaryProteinGoal: number;
  diaryCarbsGoal: number;

  createdAt: Date;
  updatedAt: Date;
}
