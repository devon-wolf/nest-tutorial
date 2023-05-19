import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChickensService } from './chickens.service';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';

@Controller('chickens')
export class ChickensController {
  constructor(private readonly chickensService: ChickensService) {}

  @Post()
  create(@Body() createChickenDto: CreateChickenDto) {
    return this.chickensService.create(createChickenDto);
  }

  @Get()
  findAll() {
    return this.chickensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chickensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChickenDto: UpdateChickenDto) {
    return this.chickensService.update(+id, updateChickenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chickensService.remove(+id);
  }
}
