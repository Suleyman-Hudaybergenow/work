import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { ConvertorModule } from './convertor/convertor.module';
@Module({
  imports: [  ConvertorModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  
}
