import { Injectable,BadRequestException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from '../user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Users } from '../user.interface';
import { from,Observable } from 'rxjs';
import { CloudinaryService } from '../../image/cloudinary/cloudinary.service';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(userEntity)
        private userRepository: Repository<userEntity>
        ,private cloudinary: CloudinaryService
    ){}

  add(user: Users): Observable<Users> {
    return from(this.userRepository.save(user));
  }


    findAll(): Observable<Users[]> {
        return from(this.userRepository.find())
    }

    
    async uploadImageToCloudinary(file: Express.Multer.File) {
        console.log(file);
        return await this.cloudinary.uploadImage(file)
        .catch(() => {
            console.log("dazdza")
          throw new BadRequestException('Invalid file type.5');
        });
      }
}
