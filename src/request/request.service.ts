import { Injectable } from '@nestjs/common';
import {DeleteResult, Repository, UpdateResult} from "typeorm"
import {InjectRepository} from '@nestjs/typeorm'
import { from,Observable } from 'rxjs';
import { RequestEntity } from './entities/request.entity';
import { Request } from './request.interface';
import {payrequest} from './entities/payrequest.interface'
import axios from 'axios'
import { join } from 'path';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private  RequestRepository: Repository<RequestEntity>
){}

  create(request:RequestEntity):Observable<RequestEntity> {
    return from(this.RequestRepository.save(request)) 
  }
 

  findAll():Observable<RequestEntity[]> {
    return from(this.RequestRepository.find(
      { order:{
        id:'DESC'
      }}
    ))
  }

  findOne(id: number) {
    return from(this.RequestRepository.findOne(
          id,{ 
            order:{
              id:'DESC'
            }
          }
      
      ))
  }

  update(id: number,request:RequestEntity) {
    return from(this.RequestRepository.update(id,request));
  }
  getUserWithId (id:string){

    return from(this.RequestRepository.find(
        { 
          where:{
            worker:{id:id},
           
          }
        }
        )
      )
    }
    async  updateIsServed(id:string){
      const property = await this.RequestRepository.findOne({
          where:{id}
      })
      return this.RequestRepository.save({
          ...property,
          isServed:true    
           });
  }

  remove(id: number) {
    return from(this.RequestRepository.delete(id))
  }
}
