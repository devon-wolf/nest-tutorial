import { Injectable } from '@nestjs/common';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';

@Injectable()
export class ChickensService {
  create(createChickenDto: CreateChickenDto) {
    return 'This action adds a new chicken';
  }

  findAll() {
    return `This action returns all chickens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chicken`;
  }

  update(id: number, updateChickenDto: UpdateChickenDto) {
    return `This action updates a #${id} chicken`;
  }

  remove(id: number) {
    return `This action removes a #${id} chicken`;
  }
}
