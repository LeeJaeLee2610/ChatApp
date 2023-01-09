import { CatsService } from './services/cats.service';
import { CatsController } from './controllers/cats.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}