import { Injectable } from '@nestjs/common';
import { workerEntity } from '../workers.entity';
import {InjectRepository} from '@nestjs/typeorm'
import {DeleteResult, Repository, UpdateResult} from "typeorm"
import {Worker} from "../workers.interface"
import { from,Observable } from 'rxjs';

@Injectable()
export class WorkersService {
    constructor(
        @InjectRepository(workerEntity)
        private readonly workerRepository: Repository<workerEntity>
    ){}

  add(worker:Worker):Observable<Worker> {
      return from(this.workerRepository.save(worker))
  }

  findWithId(id:string){
     return from (
        this.workerRepository.find({
            where: [
                { id: id }
            ]
        }) 
     )   
  }
  findAll():Observable<Worker[]> {
      return from(this.workerRepository.find())
  }
  findUserWithUserName(user:object){
      return from(this.workerRepository.findOne({ name:user['name']}))
  }
  updateWorker(id:number,worker:Worker):Observable<UpdateResult> {
          return from(this.workerRepository.update(id,worker))
  }

  deleteWorker(id:number):Observable<DeleteResult> {
      return from(this.workerRepository.delete(id))
  }
  getUserWithId (id:string){

    return from(this.workerRepository.find(
        {
        
        where:{
            id:id
        }
            
         }
))}
 
    async  updateAvilbalities(id:string){
        const property = await this.workerRepository.findOne({
            where:{id}
        })
        return this.workerRepository.save({
            ...property,
            isAvailable:true    
             });
    }

    async  updatePosition(id:string ,positiony:string,positionx:string){
        
        const property = await this.workerRepository.findOne({
            where:{id}
        })
        return this.workerRepository.save({
            ...property,
            positionx:positionx,
            positiony:positiony
             });
    }
}
