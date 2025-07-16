import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HasingService } from 'src/hasing/hasing.service';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>,
               private readonly hasingService: HasingService ){}
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hasingService.hashPassword(createUserDto.password);
     await this.userRepo.save(createUserDto);
     return "User Registred Successfully";
  }

  async findOneByemail(email:string) {
    return await this.userRepo.findOne({
      where:{email},
      select:['password']
    });
  }

  

  findAll() {
    return `This action returns all user`;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
