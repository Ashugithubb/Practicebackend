import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';

@Controller('ride')
export class RideController {
  constructor(private readonly rideService: RideService) { }


  @UseGuards(JwtAuthGuard)
  @Post('/:busId')
  create(@Param('busId') busId: string, @Body() createRideDto: CreateRideDto) {

    return this.rideService.createRide(createRideDto, +busId);
  }
  @Get()
  findAllRideFromSourceToDestination(
    @Query('src') src: string,
    @Query('des') des: string
  ) {
    return this.rideService.findAllRideFromSourceToDestination(src, des);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rideService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRideDto: UpdateRideDto) {
    return this.rideService.update(+id, updateRideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rideService.remove(+id);
  }
}
