import { IsString } from "class-validator";

export class CreateRideDto {
    @IsString()
    source:string

    @IsString()
    destination:string

    @IsString()
    departure_time:string

    @IsString()
    ride_Date:string

    @IsString()
    current_location:string

    @IsString()
    publisedAt:string

}
