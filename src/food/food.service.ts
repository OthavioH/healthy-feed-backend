import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateFoodDto } from 'src/shared/dto/food/CreateFoodDto';
import { UpdateFoodDto } from 'src/shared/dto/food/UpdateFoodDto';

@Injectable()
export default class FoodService {
  constructor(private prisma: DatabaseService) {}

  async getFood(id) {
    return await this.prisma.food.findUnique({
      where: {
        id,
      },
    });
  }

  async getFoodByMealId(mealId: string) {
    return await this.prisma.food.findMany({
      where: {
        mealId,
      },
    });
  }

  async createFood(createFoodDto: CreateFoodDto) {
    return await this.prisma.food.create({
      data: {
        name: createFoodDto.name,
        quantityFormatCode: createFoodDto.quantityFormatCode,
        quantity: createFoodDto.quantity,
        calories: createFoodDto.calories,
        protein: createFoodDto.protein,
        carbs: createFoodDto.carbs,
        totalFat: createFoodDto.totalFat,
        saturatedFat: createFoodDto.saturatedFat,
        cholesterol: createFoodDto.cholesterol,
        sodium: createFoodDto.sodium,
        dietaryFiber: createFoodDto.dietaryFiber,
        meal: {
          connect: {
            id: createFoodDto.mealId,
          },
        },
      },
    });
  }

  async updateFood(updateFoodDto: UpdateFoodDto) {
    return await this.prisma.food.update({
      where: {
        id: updateFoodDto.id,
      },
      data: {
        name: updateFoodDto.name,
        quantityFormatCode: updateFoodDto.quantityFormatCode,
        quantity: updateFoodDto.quantity,
        calories: updateFoodDto.calories,
        protein: updateFoodDto.protein,
        carbs: updateFoodDto.carbs,
        totalFat: updateFoodDto.totalFat,
        saturatedFat: updateFoodDto.saturatedFat,
        cholesterol: updateFoodDto.cholesterol,
        sodium: updateFoodDto.sodium,
        dietaryFiber: updateFoodDto.dietaryFiber,
      },
    });
  }

  async deleteFood(id: string) {
    return await this.prisma.food.delete({
      where: {
        id,
      },
    });
  }
}
