import { PartialType } from '@nestjs/mapped-types';
import { CreateConvertorDto } from './create-convertor.dto';

export class UpdateConvertorDto extends PartialType(CreateConvertorDto) {}
