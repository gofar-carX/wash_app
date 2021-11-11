import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestEntity } from './entities/request.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Request } from './request.interface';
import { response, request } from 'express';
import { payrequest } from './entities/payrequest.interface';
import axios from 'axios';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() request: RequestEntity) {
    return this.requestService.create(request);
  }

  @Post('payment')
  pay(@Body() payrequest: payrequest) {
    let myObj = {
      receiverWalletId: process.env.DB_WALLET,
      amount: payrequest.amount,
      token: 'TND',
      firstName: payrequest.firstname,
      lastName: payrequest.lastname,
      phoneNumber: payrequest.phoneNumber,
      email: payrequest.email,
      orderId: '1',
      link: 'https://api.konnect.network/fYZAU7ln@',
      webhook: 'https://merchant.tech/api/notification_payment',
      successUrl: 'https://dev.konnect.network/gateway/payment-success',
      failUrl: 'https://dev.konnect.network/gateway/payment-failure',
      acceptedPaymentMethods: ['bank_card', 'wallet', 'e-DINAR'],
    };
    axios
      .post('https://api.konnect.network/api/v2/payments/init-payment', myObj, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':
            '6187cd89e9a4051e02a7c983:Dvoi6KHp-CvIfX1jhWHDZZLLkkpHe8',
        },
      })
      .then((response) => {
        console.log('hello', response);

        // response.status(HttpStatus.ACCEPTED).json(response.data.payUrl);
        // console.log(response.data.payUrl);

        // console.log('this is data', data.data.payUrl);
      })
      .catch((err) => {
        console.log('am here', err);
      });
    console.log('this is data');
  }

  @Get()
  findAll(): Observable<RequestEntity[]> {
    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() request: RequestEntity) {
    return this.requestService.update(+id, request);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
