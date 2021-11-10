import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Admin} from './admin.interface'
import { AdminEntity } from './entities/admin.entity';
import { from,Observable } from 'rxjs';


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private AdminRepository: Repository<AdminEntity>
  
){}

  create(admin: Admin): Observable<Admin>{
    return from(this.AdminRepository.save(admin));
  }

  findAll() {
    return from(this.AdminRepository.find())
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, admin: Admin) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
