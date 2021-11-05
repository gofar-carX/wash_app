import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';
const {ACCOUNT_SID,AUTH_TOKEN}=process.env
@Module({

    imports: [
        TwilioModule.forRoot({
          accountSid: ACCOUNT_SID,
          authToken: AUTH_TOKEN,
        }),
      ],


})
export class PhoneModule {}
