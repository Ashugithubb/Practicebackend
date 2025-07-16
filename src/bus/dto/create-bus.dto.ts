import { IsEnum, IsIn, IsInt, IsString } from "class-validator";
import { Category } from "../enums/bus.enum";

export class CreateBusDto {
    @IsString()
    model:string

    @IsString()
    colour:string

    @IsInt()
    total_seats:number

    @IsEnum(Category)
    category:Category   
}
