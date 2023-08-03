import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import NutritionCreateModel from 'src/shared/models/NutritionCreateModel';

@Injectable()
export class NutritionService {
  constructor(private databaseService: DatabaseService) {}

  async createNutrition(NutritionCreateModel: NutritionCreateModel) {
    return await this.databaseService.user.update({
      data: {
        nutrition: {
          create: {
            diaryCaloriesGoal: NutritionCreateModel.diaryCaloriesGoal,
            diaryProteinGoal: NutritionCreateModel.diaryProteinGoal,
            diaryCarbsGoal: NutritionCreateModel.diaryCarbsGoal,
          },
        },
      },
      where: {
        id: NutritionCreateModel.userId,
      },
    });
  }

  async getNutrition(userId: string) {
    return await this.databaseService.nutrition.findUnique({
      where: {
        userId,
      },
    });
  }

  async updateNutrition(NutritionCreateModel: NutritionCreateModel) {
    return await this.databaseService.nutrition.update({
      where: {
        userId: NutritionCreateModel.userId,
      },
      data: {
        diaryCaloriesGoal: NutritionCreateModel.diaryCaloriesGoal,
        diaryProteinGoal: NutritionCreateModel.diaryProteinGoal,
        diaryCarbsGoal: NutritionCreateModel.diaryCarbsGoal,
      },
    });
  }
}
