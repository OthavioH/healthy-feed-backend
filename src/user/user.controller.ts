import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import UserDto from 'src/shared/dto/UserDto';
import { LoginDto } from 'src/shared/dto/login/LoginDto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() userDto: UserDto) {
    const encryptedPass = await this.userService.encryptPassword(
      userDto.password,
    );
    const user = await this.userService.createUser({
      email: userDto.email,
      password: encryptedPass,
      name: userDto.name,
    });
    return user;
  }

  @Post('/login')
  async logInUser(@Body() loginDto: LoginDto) {
    return await this.userService.logInUser(loginDto.email);
  }

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
