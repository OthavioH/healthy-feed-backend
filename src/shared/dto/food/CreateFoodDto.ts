export interface CreateFoodDto {
  name: string;
  quantityFormatCode: number;
  quantity: number;
  calories: number;
  protein: number;
  carbs: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  dietaryFiber: number;
  mealId: string;
}
