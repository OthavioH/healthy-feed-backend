import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { NutritionController } from './nutrition/nutrition.controller';
import { NutritionService } from './nutrition/nutrition.service';
import { DayController } from './day/day.controller';
import { MealController } from './meal/meal.controller';
import FoodController from './food/food.controller';
import { DayService } from './day/day.service';
import MealService from './meal/meal.service';
import FoodService from './food/food.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    NutritionController,
    DayController,
    MealController,
    FoodController,
  ],
  providers: [
    AppService,
    DatabaseService,
    UserService,
    NutritionService,
    DayService,
    MealService,
    FoodService,
  ],
})
export class AppModule {}
