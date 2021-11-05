import { Injectable } from '@nestjs/common';

import {DeleteResult, Repository, UpdateResult} from "typeorm"
import {ReviewEntity} from './entities/review.entity'
import {InjectRepository} from '@nestjs/typeorm'
import { from,Observable } from 'rxjs';
import {Review }from './review.interface'


@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(ReviewEntity)
    private  ReviewsRepository: Repository<ReviewEntity>
){}
  create(review:Review) {
    return from(this.ReviewsRepository.save(review))  }

  findAll() :Observable<ReviewEntity[]> {
    return from(this.ReviewsRepository.find())
  }

  findOne(id: number) :Observable<ReviewEntity>  {
    return from(this.ReviewsRepository.findOne(id))
  }

  update(id: number, review:Review) {
    return from(this.ReviewsRepository.update(id,review))  }

  remove(id: number):Observable<DeleteResult> {
    return from(this.ReviewsRepository.delete(id))
  }
}
