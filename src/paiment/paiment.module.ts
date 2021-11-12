import { Module } from '@nestjs/common';
// import { PaimentService } from './paiment.service';
// import { PaimentController } from './paiment.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { paimentEntity } from './paiment.entity';
// import { CloudinaryModule } from '../image/cloudinary/cloudinary.module';
@Module({
  imports: [TypeOrmModule.forFeature([paimentEntity]),],
  providers: [],
  controllers: [],
})
export class PaimentModule {}