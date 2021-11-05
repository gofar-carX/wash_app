
import { Controller, Post, Body, Get, Put,Param, Delete,Req ,Query,Res, HttpStatus } from '@nestjs/common';
import { json, Response } from 'express';
require('dotenv').config();
import { PhoneService } from './phone.service';
@Controller('phone')
export default class PhoneController {


  
      constructor(
         private phoneService: PhoneService
           ){}
    
     
    
        @Get("send/:id")
         sendNumber(@Param() params):any {
            console.log("here")
               return this.phoneService.sendSMS(params.id)
        }
        @Post("verif/:id")
      
         async   VerifNumber(@Res() response:Response, @Param() params):Promise<any> {
               let bool =await  this.phoneService.verification(params.id)
               console.log(bool)
               if (bool===false){
               response
               .status(HttpStatus.EXPECTATION_FAILED)
               .send();

            }else{
               response.
               status(HttpStatus.ACCEPTED)
               .send("done");
            }
            }
      
            
   
    


}
