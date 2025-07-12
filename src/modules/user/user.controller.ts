import { Controller, Post, Body, Get, Param, UnauthorizedException, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Inscription
  @Post('register')
  async register(@Body() dto: { email: string; motDePasse: string; nom: string; avatar?: string }) {
    return this.userService.register(dto);
  }

  // Connexion
  @Post('login')
  async login(@Body() dto: { email: string; motDePasse: string }) {
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

  // Mise à jour utilisateur
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: { nom?: string; email?: string; motDePasse?: string; avatar?: string }) {
    return this.userService.update(Number(id), dto);
  }

  // Suppression utilisateur
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }
}
