import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import CreateDayDto from 'src/shared/dto/day/CreateDayDto';

@Injectable()
export class DayService {
  constructor(private prisma: DatabaseService) {}

  async createDay(createDayDto: CreateDayDto) {
    await this.prisma.day.create({
      data: {
        date: createDayDto.date,
        user: {
          connect: {
            id: createDayDto.userId,
          },
        },
      },
    });
  }

  async getDays() {
    return await this.prisma.day.findMany();
  }

  async getDayById(dateId: string) {
    return await this.prisma.day.findUnique({
      where: {
        id: dateId,
      },
    });
  }

  async deleteDay(dateId: string) {
    return await this.prisma.day.delete({
      where: {
        id: dateId,
      },
    });
  }

  async updateDay(dateId: string, date: Date) {
    return await this.prisma.day.update({
      where: {
        id: dateId,
      },
      data: {
        date,
      },
    });
  }
}
