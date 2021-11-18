
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { Users } from '../user.interface';
import { from, Observable } from 'rxjs';
import { CloudinaryService } from '../../image/cloudinary/cloudinary.service';
require('dotenv').config();

export class UsersService {
    accountSid = process.env.TWILIO_ACCOUNT_SID;
    authToken = process.env.TWILIO_AUTH_TOKEN;
    constructor(
        @InjectRepository(userEntity)
        private userRepository: Repository<userEntity>
        , private cloudinary: CloudinaryService,

    ){}

    getUerWithId(pramas: string): Observable<userEntity[]> {
        return from(this.userRepository.find({
            where: [
                { id: pramas }
            ],
            order:{
                 id:'DESC'
            }
        }))
    }
    getUserWithPhoneNumber(phone: number) {
        return from(this.userRepository.find({
            where: [ 
                { phone: phone }
            ]
        }))
    }


    sendSms(phone, message: any) {
        const client = require('twilio')(this.accountSid, this.authToken);
        console.log(phone)
        client.messages
            .create({
                body: message,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: phone
            })
            .then(message => console.log(message.sid));
    }

    getOne(user: Users): Observable<userEntity[]> {


        return from(this.userRepository.find({
            where: [
                { email: user.email }
            ]
        }))



    }
     add(user: Users) {
           return from( this.userRepository.save(user))
          
    }
    async updateUser(user1: Users) {

        return from(this.userRepository.update({
            id: user1.id,
        }, {
            name: user1.name,
            email: user1.email,
            phone: user1.phone,
            photo: user1.photo

        }))


    }


    async uploadImageToCloudinary(file: Express.Multer.File) {

        const url = await this.cloudinary.uploadImage(file)
        return url;
    }
    findAll(): Observable<Users[]> {
        return from(this.userRepository.find())
    }
    updateImage(photo: string, id: any) {
        return this.userRepository.update(id, { photo: photo })

    }
}
