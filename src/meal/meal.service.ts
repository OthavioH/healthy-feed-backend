import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import CreateMealDto from 'src/shared/dto/meal/CreateMealDto';
import UpdateMealDto from 'src/shared/dto/meal/UpdateMealDto';

@Injectable()
export default class MealService {
  constructor(private prisma: DatabaseService) {}

  async createMeal(createMealDto: CreateMealDto) {
    return await this.prisma.meal.create({
      data: {
        name: createMealDto.name,
        day: {
          connect: {
            id: createMealDto.dayId,
          },
        },
      },
    });
  }

  async updateMeal(updateMealDto: UpdateMealDto) {
    return await this.prisma.meal.update({
      where: {
        id: updateMealDto.id,
      },
      data: {
        // update all fields except for the dayId
        name: updateMealDto.name,
        calories: updateMealDto.calories,
        protein: updateMealDto.protein,
        carbs: updateMealDto.carbs,
        totalFat: updateMealDto.totalFat,
        saturatedFat: updateMealDto.saturatedFat,
        cholesterol: updateMealDto.cholesterol,
        sodium: updateMealDto.sodium,
        dietaryFiber: updateMealDto.dietaryFiber,
        transFat: updateMealDto.transFat,
      },
    });
  }

  async getMeal(mealId: string) {
    return await this.prisma.meal.findUnique({
      where: {
        id: mealId,
      },
    });
  }

  async getMealsByDayId(dayId: string) {
    return await this.prisma.meal.findMany({
      where: {
        dayId,
      },
    });
  }

  async deleteMeal(mealId: string) {
    return await this.prisma.meal.delete({
      where: {
        id: mealId,
      },
    });
  }
}
