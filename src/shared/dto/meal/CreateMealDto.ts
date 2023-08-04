import { Food } from 'src/shared/models/Food';

export default interface CreateMealDto {
  name: string;
  dayId: string;
  calories: number;
  protein: number;
  carbs: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  dietaryFiber: number;
  foods?: Food[];
}
