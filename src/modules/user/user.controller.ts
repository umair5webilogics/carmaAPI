import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('count')
  async getUsersCount(): Promise<{ count: number }> {
    try {
      const count = await this.usersService.getUsersCount();
      return {
        count,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error getting user count');
    }
  }

  // get all users data
  @Get('all')
  async getAllUsers(): Promise<any> {
    try {
      const users = await this.usersService.getAllUsers();
      return users;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error getting all users');
    }
  }
}
