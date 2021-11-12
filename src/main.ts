import { Post} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const axios = require('axios')
require('dotenv').config()




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  // @Post("/paiment", (req,res)=>{

  //   var myObj={
  //     receiverWallet :process.env.DB_WALLET,
  //     amount:req.body.amount,
  //     selectedPaymentMethod:'gateway',
  //     token:'TND',
  //     firstname:req.body.firstname,
  //     lastname:req.body.lastname,
  //     email:req.body.email,
  //     Phone:req.body.Phone,
  //     webhook:"https://merchant.tech/api/notification_payment",
  //     successUrl:"http://localhost:5000/user",
  //     failUrl:"http://localhost:5000"
  //   }
    
   
//     axios.post('https: //api.konnect.network/api/v2/payments/init-payment',myObj).then((data)=>{
//       res.json(data.data.payUrl)
//     })
// }) 
  
  await app.listen(process.env.PORT || 5000); 
}

bootstrap();
