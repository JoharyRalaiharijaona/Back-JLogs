import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from '@prisma/client';
import { CreateClientDto } from './create-client.dto';
import { UpdateClientDto } from './update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client | null> {
    return this.clientService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: CreateClientDto): Promise<Client> {
    return this.clientService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateClientDto): Promise<Client> {
    return this.clientService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Client> {
    return this.clientService.remove(Number(id));
  }
}
