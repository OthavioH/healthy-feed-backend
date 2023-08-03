import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { NutritionController } from './nutrition/nutrition.controller';
import { NutritionService } from './nutrition/nutrition.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, NutritionController],
  providers: [AppService, DatabaseService, UserService, NutritionService],
})
export class AppModule {}
