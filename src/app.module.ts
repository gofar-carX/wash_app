import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkersModule } from './workers/workers.module';
import { CloudinaryModule } from './image/cloudinary/cloudinary.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RequestModule } from './request/request.module';
import { PaimentModule } from './paiment/paiment.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    
      extra: {
        ssl: true
      }
       ///
      
       
   
    }),
    UsersModule,
    WorkersModule,
    CloudinaryModule,
    ReviewsModule,
    RequestModule,
    PaimentModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
