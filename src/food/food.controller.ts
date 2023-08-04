import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import FoodService from './food.service';
import { CreateFoodDto } from 'src/shared/dto/food/CreateFoodDto';
import { UpdateFoodDto } from 'src/shared/dto/food/UpdateFoodDto';

@Controller('food')
export default class FoodController {
  constructor(private foodService: FoodService) {}

  @Get(':id')
  async getFood(@Param('id') id: string) {
    return await this.foodService.getFood(id);
  }

  @Get('meal/:mealId')
  async getFoodByMealId(@Param('mealId') mealId: string) {
    return await this.foodService.getFoodByMealId(mealId);
  }

  @Post()
  async createFood(@Body() createFoodDto: CreateFoodDto) {
    return await this.foodService.createFood(createFoodDto);
  }

  @Put()
  async updateFood(@Body() updateFoodDto: UpdateFoodDto) {
    return await this.foodService.updateFood(updateFoodDto);
  }

  @Delete(':id')
  async deleteFood(@Param('id') id: string) {
    return await this.foodService.deleteFood(id);
  }
}
