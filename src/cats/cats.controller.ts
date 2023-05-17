import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This is all the cats';
  }

  @Get('breed')
  somethingElse(): string {
    return 'This is what happens if you go to cats/breed';
  }
}
