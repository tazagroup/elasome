import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
  import {HoadonService } from './hoadon.service';
  @Controller('hoadon')
  export class HoadonController {
    constructor(private readonly HoadonService:HoadonService) {}
  
    @Post()
    create(@Body() data: any) {
      return this.HoadonService.create(data);
    }
    @Get()
    async findAll() {
      return await this.HoadonService.findAll();
    }
    @Get('findid/:id')
    async findOne(@Param('id') id: string) {
      return await this.HoadonService.findid(id);
    }
    @Get('findslug/:slug')
    async findslug(@Param('slug') slug: string) {
      return await this.HoadonService.findslug(slug);
    }
    @Get('pagination')
    async findPagination(@Query('page') page: number,@Query('perPage') perPage: number){
         return await this.HoadonService.findPagination(page,perPage);
      }
    @Post('search')
      async findQuery(@Body() SearchParams: any){
        return await this.HoadonService.findQuery(SearchParams);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
      return this.HoadonService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.HoadonService.remove(id);
    }
  }