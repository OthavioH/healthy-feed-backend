import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import MealService from './meal.service';
import UpdateMealDto from 'src/shared/dto/meal/UpdateMealDto';
import CreateMealDto from 'src/shared/dto/meal/CreateMealDto';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}

  @Post()
  async createMeal(@Body() createMealDto: CreateMealDto) {
    return await this.mealService.createMeal(createMealDto);
  }

  @Get(':id')
  async getMeal(@Param('id') id: string) {
    return await this.mealService.getMeal(id);
  }

  @Get('day/:dayId')
  async getMealsByDayId(@Param('dayId') dayId: string) {
    return await this.mealService.getMealsByDayId(dayId);
  }

  @Put(':id')
  async updateMeal(@Body() updateMealDto: UpdateMealDto) {
    return await this.mealService.updateMeal(updateMealDto);
  }

  @Delete(':id')
  async deleteMeal(@Param('id') id: string) {
    return await this.mealService.deleteMeal(id);
  }
}
