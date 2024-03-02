import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CommonModule } from '../common/common.module';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let user: User = {} as User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [CommonModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const createUserDto: CreateUserDto = {
      nome: 'John',
      nascimento: '<EMAIL>',
      apelido: '<PASSWORD4>',
      stack: [],
    };
    const result = await service.create(createUserDto);
    expect(result.nome).toBe(createUserDto.nome);
    expect(result.apelido).toBe(createUserDto.apelido);
    expect(result.nascimento).toBe(createUserDto.nascimento);
    expect(result.stack).toStrictEqual(createUserDto.stack);
    expect(result.id).toBeDefined();
    user = result;
  });

  it('should get all users', async () => {
    const result = await service.findAll();
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
  });

  it('should update a user', async () => {
    const updateUser: UpdateUserDto = {
      ...user,
      nome: '<NAME>',
    };

    const result = await service.update(user.id, updateUser);
    expect(result.nome).toBe(updateUser.nome);
  });

  it('should delete a user', async () => {
    expect(user.id).toBeDefined();
    const result = await service.remove(user.id);
    expect(result).toBeDefined();
  });
});
