import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import {Review} from './review.interface'
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';


@Controller('reviews')
export class ReviewsController {
  constructor(private  reviewsService: ReviewsService) {}

  @Post()
  create(@Body() review: Review ) {
    return this.reviewsService.create(review);
  }

  @Get()
  findAll():Observable<Review[]> {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string , @Body() review:Review ):Observable<UpdateResult> {
    return this.reviewsService.update(+id,review);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Observable<DeleteResult> {
    return this.reviewsService.remove(+id);
  }
}
