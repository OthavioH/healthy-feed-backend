import {
  Controller,
  Post,
  Body,
  HttpCode,
  Delete,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import UserDto from 'src/shared/dto/UserDto';
import { LoginDto } from 'src/shared/dto/login/LoginDto';
import { createToken } from 'src/shared/utils/utils';
import { JsonWebTokenError } from 'jsonwebtoken';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @HttpCode(201)
  async createUser(@Body() userDto: UserDto) {
    try {
      const encryptedPass = await this.userService.encryptPassword(
        userDto.password,
      );

      const user = await this.userService.createUser({
        email: userDto.email,
        password: encryptedPass,
        name: userDto.name,
      });

      const token = createToken(user.email, user.password, user.name);

      return token;
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError) {
        return 'User already exists';
      }
      if (error instanceof JsonWebTokenError) {
        return 'Could not create token';
      }
      throw new BadRequestException('Could not create user');
    }
  }

  @Post('login')
  async logInUser(@Body() loginDto: LoginDto) {
    try {
      const user = await this.userService.logInUser(loginDto.email);
      const token = createToken(user.email, user.password, user.name);
      return token;
    } catch (error) {
      throw new BadRequestException('Login failed');
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
