import { Body, Controller, Post, Get,Put,Delete ,Res, UploadedFile,
  UseInterceptors} from '@nestjs/common';
import { Users } from '../user.interface';
import { UsersService } from '../users/users.service';
import { Observable } from 'rxjs';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express'
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
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
    return this.UsersService.uploadImageToCloudinary(file);
  }
  

  

}
