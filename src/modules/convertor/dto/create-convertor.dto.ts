import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateConvertorDto {
    @ApiProperty({
        type: Number,
        nullable: false,
        required: true
    })
    @IsNotEmpty()
    @IsInt()
    num: number;
}
