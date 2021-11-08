import { Controller, Get, Post, Body, Patch, Param, Delete , Res , HttpStatus } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestEntity } from './entities/request.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Request } from './request.interface';
import { response, Response,request } from 'express';
import {payrequest} from './entities/payrequest.interface'
import axios from 'axios'


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() request: RequestEntity) {
    return this.requestService.create(request);
  }

  @Post('payment')
  

    
  pay(@Body() payrequest:payrequest){
    var myObj={
      receiverWallet :process.env.DB_WALLET,
      amount:request.body.amount,
      selectedPaymentMethod:'gateway',
      token:'TND',
      firstname:request.body.firstname,
      lastname:request.body.lastname,
      email:request.body.email,
      Phone:request.body.Phone,
      webhook:"https://merchant.tech/api/notification_payment",
      successUrl:"http://localhost:5000/user",
      failUrl:"http://localhost:5000"
    }
    
     axios.post('https: //api.konnect.network/api/v2/payments/init-payment',myObj).then((data)=>{
      response.status(HttpStatus.ACCEPTED).json(data.data.payUrl)   
     })
  }

  @Get()
  findAll():Observable<RequestEntity[]> {
    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string,@Body() request: RequestEntity) {
    return this.requestService.update(+id,request);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
