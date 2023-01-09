import { CatsModule } from './cat/cats.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CatsModule]
})
export class AppModule {}
