import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';
import { Repository } from 'typeorm';
import { BusService } from 'src/bus/bus.service';

@Injectable()
export class RideService {
  constructor(@InjectRepository(Ride) private readonly rideRepo:Repository<Ride>,
            private readonly busService:BusService){}
 async createRide(createRideDto: CreateRideDto,busId:number) {
    const bus = await this.busService.findOne(busId);
    if(!bus) return {"msg":"Bus does not exist"}
   const newRide = await this.rideRepo.create({
          ...createRideDto,
          bus
   })
    await this.rideRepo.save(newRide);
    return {"msg":"Ride Published"};
  }

async findAllRideFromSourceToDestination(src:string,des:string) {
  
    return ;
  }

  async findOne(rideId: number) {
    return await this.rideRepo.findOneBy({rideId});
  }

 async update(id: number, updateRideDto: UpdateRideDto) {
    return await this.rideRepo.update(id, updateRideDto);
  }

  async remove(id: number) {
    return await this.rideRepo.delete(id);
  }
}
