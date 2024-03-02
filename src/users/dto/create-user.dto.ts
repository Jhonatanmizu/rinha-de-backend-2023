import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @IsNotEmpty()
  @MaxLength(32)
  apelido: string;

  @IsNotEmpty()
  nascimento: string;

  stack: string[];
}
