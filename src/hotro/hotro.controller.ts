import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
  import {HotroService } from './hotro.service';
  @Controller('hotro')
  export class HotroController {
    constructor(private readonly HotroService:HotroService) {}
  
    @Post()
    create(@Body() data: any) {
      return this.HotroService.create(data);
    }
    @Get()
    async findAll(@Query('page') page: number, @Query('perPage') perPage: number) {
      return await this.HotroService.findAll(page, perPage);
    }
    

    @Get('findid/:id')
    async findOne(@Param('id') id: string) {
      return await this.HotroService.findid(id);
    }
    @Get('findslug/:slug')
    async findslug(@Param('slug') slug: string) {
      return await this.HotroService.findslug(slug);
    }
    @Get('pagination')
    async findPagination(@Query('page') page: number,@Query('perPage') perPage: number){
         return await this.HotroService.findPagination(page,perPage);
      }
    @Post('search')
      async findQuery(@Body() SearchParams: any){
        return await this.HotroService.findQuery(SearchParams);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
      return this.HotroService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.HotroService.remove(id);
    }
  }