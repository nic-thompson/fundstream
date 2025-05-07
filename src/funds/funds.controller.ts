import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Put,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { FundsService } from './funds.service';
  import { Fund } from './fund.entity';
  
  @Controller('funds')
  export class FundsController {
    constructor(private readonly fundsService: FundsService) {}
  
    @Get()
    findAll(): Promise<Fund[]> {
      return this.fundsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Fund> {
      return this.fundsService.findOne(id);
    }
  
    @Post()
    create(@Body() data: Partial<Fund>): Promise<Fund> {
      return this.fundsService.create(data);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updates: Partial<Fund>,
    ): Promise<Fund> {
      return this.fundsService.update(id, updates);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return this.fundsService.remove(id);
    }
  }
  