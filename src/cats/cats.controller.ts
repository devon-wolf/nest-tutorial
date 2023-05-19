import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatDto } from './cat.dto';
@Controller('cats')
export class CatsController {
  currentId = 1;
  cats: { [id: string]: CatDto } = {};

  @Post()
  async create(@Body() cat: CreateCatDto): Promise<void> {
    const stringId = this.currentId.toString();
    this.cats[stringId] = { ...cat, id: this.currentId.toString() };
    this.currentId += 1;
  }

  @Get()
  async findAll(): Promise<{ [id: string]: CatDto }> {
    return this.cats;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CatDto> {
    return this.cats[id];
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: CreateCatDto,
  ): Promise<void> {
    this.cats[id] = { ...updateCatDto, id };
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() updateCatDto: Partial<CreateCatDto>,
  ): Promise<void> {
    this.cats[id] = { ...this.cats[id], ...updateCatDto };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    delete this.cats[id];
  }
}
