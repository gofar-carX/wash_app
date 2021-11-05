import { Controller, Post, Body, Get, Put,Param, Delete} from '@nestjs/common';
import { Users } from '../user.interface';
import { UsersService } from '../users/users.service';
import { Observable } from 'rxjs';

import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {

  constructor(private UsersService: UsersService){}

  @Post()
  add(@Body() user: Users): Observable<Users>{
    
      return this.UsersService.add(user)
  }


  @Get()
  findAll(): Observable<Users[]>{
      return this.UsersService.findAll()
  }  
  @Put(':id')
  update(
     @Param('id') id : number,
     @Body() user : Users
  ):Observable<UpdateResult>{
     
      return this.UsersService.updateuser(id,user)
  }

  @Delete(":id")
  deleteWorker(
      @Param('id') id : number,
  ):Observable<DeleteResult>{
      return this.UsersService.deleteuser(id)
  }

}
