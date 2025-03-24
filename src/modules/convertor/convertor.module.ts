import { Module } from '@nestjs/common';
import { ConvertorService } from './services/convertor.service';
import { ConvertorController } from './controllers/convertor.controller';
import { ConvertorRepository } from './repository/convertor-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConvertorEntity } from './entities/convertor.entity';

@Module({
 
  controllers: [ConvertorController],
  providers: [ConvertorService],
})
export class ConvertorModule {}
