import { Controller, Post, Body, Get, Put,Param, Delete} from '@nestjs/common';
import { WorkersService } from '../services/workers.service';
import { Worker} from '../workers.interface'
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';


@Controller('workers')
export class WorkersController {
  constructor(
      private workerService : WorkersService
       ){}

    @Post()
    add(@Body() worker: Worker){
        
        return this.workerService.add(worker)
    }

    @Get()

    findAll():Observable<Worker[]> {
       
        return this.workerService.findAll()
    }

    @Put(':id')
      update(
         @Param('id') id : number,
         @Body() worker : Worker
      ):Observable<UpdateResult>{
         
          return this.workerService.updateWorker(id,worker)
      }

      @Delete(":id")
      deleteWorker(
          @Param('id') id : number,
      ):Observable<DeleteResult>{
          return this.workerService.deleteWorker(id)
      }

}
