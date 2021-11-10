import { Injectable} from '@nestjs/common';
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


  findAll():Observable<Worker[]> {
      return from(this.workerRepository.find())
  }

  updateWorker(id:number,worker:Worker):Observable<UpdateResult> {
          return from(this.workerRepository.update(id,worker))
  }

  deleteWorker(id:number):Observable<DeleteResult> {
      return from(this.workerRepository.delete(id))
  }

}
