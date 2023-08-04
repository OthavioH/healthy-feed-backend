import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import NutritionCreateModel from 'src/shared/models/NutritionCreateModel';

@Controller('nutrition')
export class NutritionController {
  constructor(private nutritionService: NutritionService) {}

  @Get(':id')
  async getNutrition(@Param('id') id: string) {
    return await this.nutritionService.getNutrition(id);
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
