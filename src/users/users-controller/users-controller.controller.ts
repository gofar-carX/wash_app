import { Body, Controller, Post, Get, Put, Delete, Res, UploadedFile, UseInterceptors, HttpStatus, Param } from '@nestjs/common';
import { Users } from '../user.interface';
import { UsersService } from '../users/users.service';
import { Observable, Subscriber } from 'rxjs';
import { Response } from 'express';
var jwt = require("jsonwebtoken")
import { FileInterceptor } from '@nestjs/platform-express'


@Controller('users')
export class UsersController {
  val: any = Math.floor(100000 + Math.random() * 900000);
  check=[...[this.val]]
  
  
  constructor(private UsersService: UsersService) { }
  ///auth with phone
  @Post("send/:id")
  send(@Param('id') phone: number, @Res() respone: Response) {
    // get all users
      console.log(phone)
      
    this.UsersService.getUserWithPhoneNumber(phone).subscribe((result) => {

      
      if (result.length === 0) {
          const user:Users =  {id:0,name:"",email:null,phone:Number(phone),photo:"",requests:[]  } 
        this.UsersService.add(user).subscribe((result_) => {
          console.log(user)
                 console.log(result_.phone,"aeae") 
          const welcomeMessage = `Welcome carX! Your verification code is ${this.val}`
          let number = `+216${result_.phone}`
          this.UsersService.sendSms(number, welcomeMessage)
          const token = jwt.sign(

            { user_id: result_.id },
            process.env.TOKEN_KEY

          )
          respone.status(HttpStatus.CREATED)
            .json({ respond: "PHONE_NUMBER_NOT_FOUND", Token: token, verifCode: this.check })
        })
      } else if(result.length>0){
        const token = jwt.sign(
        

          { user_id: result[0] },
          process.env.TOKEN_KEY

        )
        const welcomeMessage = `Welcome carX! Your verification code is ${this.val}`
        let number = `+216${result[0].phone}`
        this.UsersService.sendSms(number, welcomeMessage)
        respone.status(HttpStatus.CREATED)
          .json({ respond: "PHONE_NUMBER_WAS_FOUND", Token: token, verifCode: this.val })
      }

    })


  }

  ///AUTH WITH GOOGLE 
  @Post()
  add(@Body() user: Users, @Res() respone: Response): any {
    this.UsersService.getOne(user).subscribe((result) => {
      if (result.length == 0) {
        this.UsersService.add(user).subscribe((result) => {

          const token = jwt.sign(
            { user_id: result.id },
            process.env.TOKEN_KEY
          )

          respone.status(HttpStatus.CREATED)
            .json({ respond: "NOT FOUND", Token: token })
        })
      } else {
        console.log(result[0].id)

        const token = jwt.sign(
          { user_id: result[0].id },
          process.env.TOKEN_KEY
        )

        respone.status(HttpStatus.CREATED)
          .json({ respond: "FOUND", Token: token })
      }

    })
  }
  //update just user 
  @Put('edit')
  async updateUser(@Body() user: Users, @Res() respone: Response) {
    return this.UsersService.updateUser(user).then((result) => {
      respone.status(HttpStatus.CREATED)
        .json({ response: "UPDATED" })
    })
  }

  
  //get spesific user with id 
  @Get(":id")
  findUser(@Param('id') id: string, @Res() respone: Response) {
    this.UsersService.getUerWithId(id).subscribe((result) => {
      respone.status(HttpStatus.CREATED)
        .json({ respond: "FOUND",data:result})
    })

  }
  //get all user 
  @Get()
  findAll(): Observable<Users[]> {
    return this.UsersService.findAll()
  }

 

  // update image 
  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Param() params) {

    const photo = await this.UsersService.uploadImageToCloudinary(file);
    return this.UsersService.updateImage(photo.url, params.id)

  }
}
