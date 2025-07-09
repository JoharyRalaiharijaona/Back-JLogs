import { Controller, Post, Body, Get, Param, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Inscription
  @Post('register')
  async register(@Body() dto: { email: string; password: string; name: string }) {
    return this.userService.register(dto);
  }

  // Connexion
  @Post('login')
  async login(@Body() dto: { email: string; password: string }) {
    const user = await this.userService.login(dto);
    if (!user) throw new UnauthorizedException('Identifiants invalides');
    return user;
  }

  // Liste des utilisateurs (exemple admin)
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  // Détail utilisateur
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }
}

