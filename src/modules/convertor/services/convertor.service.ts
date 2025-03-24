import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateConvertorDto } from '../dto/create-convertor.dto';
import { UpdateConvertorDto } from '../dto/update-convertor.dto';

@Injectable()
export class ConvertorService {
  create(createConvertorDto: CreateConvertorDto) {
    return 'This action adds a new convertor';
  }

  findAll() {
    return `This action returns all convertor`;
  }
  private weightUnits = {
    mg: 1, // миллиграмм
    g: 1000, // грамм
    kg: 1000000, // килограмм
    oz: 28349.5, // унция
    lb: 453592, // фунт
  };

  convertWeight(value: number, from: string, to: string): number {
    if (!this.weightUnits[from] || !this.weightUnits[to]) {
      throw new BadRequestException('Invalid weight unit');
    }

    const valueInMg = value * this.weightUnits[from]; // Преобразование в миллиграммы
    return valueInMg / this.weightUnits[to]; // Преобразование в целевую единицу
  }
  findOne(id: number) {
    return `This action returns a #${id} convertor`;
  }

  update(id: number, updateConvertorDto: UpdateConvertorDto) {
    return `This action updates a #${id} convertor`;
  }

  remove(id: number) {
    return `This action removes a #${id} convertor`;
  }
}
