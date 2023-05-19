import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ChickensModule } from './chickens/chickens.module';

@Module({
  imports: [ChickensModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
