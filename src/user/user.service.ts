import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { User } from 'src/shared/models/User';
import UserCreateModel from 'src/shared/models/UserCreateModel';

import * as bcrypt from 'bcrypt';
import UpdateUserDto from 'src/shared/dto/user/UpdateUserDto';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  async createUser(userCreateModel: UserCreateModel): Promise<User> {
    return await this.databaseService.user.create({
      data: {
        email: userCreateModel.email,
        password: userCreateModel.password,
        name: userCreateModel.name,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.databaseService.user.findMany();
  }

  async deleteUser(id: string): Promise<User> {
    return await this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const encryptedPass = await this.encryptPassword(updateUserDto.password);
    return await this.databaseService.user.update({
      where: {
        id: updateUserDto.id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: encryptedPass,
      },
    });
  }

  async logInUser(email: string): Promise<User> {
    return await this.databaseService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    return newPassword;
  }
}
