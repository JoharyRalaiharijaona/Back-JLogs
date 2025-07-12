import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsOptional()
  @IsString()
  nom?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string = '';

  @IsString()
  fonction: string = '';

  @IsString()
  NIF: string = '';

  @IsString()
  STAT: string = '';

  @IsString()
  avatar: string = '';
}
