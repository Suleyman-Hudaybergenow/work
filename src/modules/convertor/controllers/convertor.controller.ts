import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ConvertorService } from '../services/convertor.service';
import { CreateConvertorDto } from '../dto/create-convertor.dto';
import { UpdateConvertorDto } from '../dto/update-convertor.dto';

@Controller('convertor')
export class ConvertorController {
  constructor(private readonly convertorService: ConvertorService) {}

  @Post()
  create(@Body() createConvertorDto: CreateConvertorDto) {
    return this.convertorService.create(createConvertorDto);
  }

  @Get()
  findAll() {
    return this.convertorService.findAll();
  }
  @Get('weight')
  convertWeight(
    @Query('value') value: number,
    @Query('from') from: string,
    @Query('to') to: string,
  ): { result: number } {
    return { result: this.convertorService.convertWeight(value, from, to) };
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convertorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvertorDto: UpdateConvertorDto) {
    return this.convertorService.update(+id, updateConvertorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convertorService.remove(+id);
  }
}
