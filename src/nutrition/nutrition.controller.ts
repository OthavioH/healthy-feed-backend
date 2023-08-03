import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import NutritionCreateModel from 'src/shared/models/NutritionCreateModel';

@Controller('nutrition')
export class NutritionController {
  constructor(private nutritionService: NutritionService) {}

  @Get()
  async getNutrition(@Body() body: { userId: string }) {
    return await this.nutritionService.getNutrition(body.userId);
  }

  @Post()
  async createNutrition(@Body() nutritionCreateModel: NutritionCreateModel) {
    return await this.nutritionService.createNutrition(nutritionCreateModel);
  }

  @Put()
  async updateNutrition(@Body() nutritionCreateModel: NutritionCreateModel) {
    return await this.nutritionService.updateNutrition(nutritionCreateModel);
  }
}
