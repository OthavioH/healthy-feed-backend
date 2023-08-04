import Meal from './Meal';

export default interface Day {
  id: string;
  date: Date;
  userId: string;
  meals: Meal[];
}
