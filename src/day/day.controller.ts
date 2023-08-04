import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DayService } from './day.service';
import CreateDayDto from 'src/shared/dto/day/CreateDayDto';

@Controller('day')
export class DayController {
  constructor(private dayService: DayService) {}

  @Post()
  async createDay(@Body() createDayDto: CreateDayDto) {
    return await this.dayService.createDay(createDayDto);
  }

  @Get('user/:userId')
  async getDays() {
    return await this.dayService.getDays();
  }

  @Get(':dateId')
  async getDayById(@Param('dateId') dateId: string) {
    return await this.dayService.getDayById(dateId);
  }

  @Put(':dateId')
  async updateDay(@Param('dateId') dateId: string, @Body() date: Date) {
    return await this.dayService.updateDay(dateId, date);
  }
}
