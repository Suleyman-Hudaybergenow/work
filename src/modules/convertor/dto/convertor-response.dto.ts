import { ConvertorEntity } from "../entities/convertor.entity";

export class ConvertorResponseDto {

    num: number;
    constructor(convertor: ConvertorEntity){
  
        this.num = convertor.num
    }
}