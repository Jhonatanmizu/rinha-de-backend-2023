import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import PrismaService from '../common/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({ where: { id } });
  }
}
