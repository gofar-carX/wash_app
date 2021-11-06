import { Injectable } from '@nestjs/common';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { throwError } from 'rxjs';
@Injectable()
export class PhoneService {
     val:any = Math.floor(100000 + Math.random() * 900000);
    check:any =this.val
   
    public constructor(@InjectTwilio() private readonly client: TwilioClient) {}
    
    async sendSMS(TARGET_PHONE_NUMBER:any) {
      
      try {
        return await this.client.messages.create({
          body: `code verification ${this.val}`,
          from: "+12058574806",
          to: TARGET_PHONE_NUMBER,
        }); 
      } catch (e) {
        return e;
      }
    }
    async verification(TARGET_PHONE_VERIFICATION:string) {
        try { 
          
          if(parseInt(TARGET_PHONE_VERIFICATION)!== this.check){
           return false
            
          }else if (parseInt(TARGET_PHONE_VERIFICATION)== this.check){
            setTimeout(()=>{
              this.check=null
            },10000)
            return true 
          }else{
            return false 
          }
          

        }catch (e) {
            return e 
        }


    }

  }
