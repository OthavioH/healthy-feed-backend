import { Food } from './Food';

export default interface Meal {
  id: string;
  dayId: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  dietaryFiber: number;
  foods: Food[];
}
