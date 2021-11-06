import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestEntity } from './entities/request.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Request } from './request.interface';


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() request: RequestEntity) {
    return this.requestService.create(request);
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
  update(@Param('id') id: string) {
    return this.requestService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
