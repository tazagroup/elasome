import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
  import {ChatsService } from './chats.service';
  @Controller('Chats')
  export class ChatsController {
    constructor(private readonly ChatsService:ChatsService) {}
  
    @Post()
    create(@Body() data: any) {
      return this.ChatsService.create(data);
    }
    @Get()
    async findAll() {
      return await this.ChatsService.findAll();
    }
    @Get('findid/:id')
    async findOne(@Param('id') id: string) {
      return await this.ChatsService.findid(id);
    }
    @Get('findslug/:slug')
    async findslug(@Param('slug') slug: string) {
      return await this.ChatsService.findslug(slug);
    }
    @Get('pagination')
    async findPagination(@Query('page') page: number,@Query('perPage') perPage: number){
         return await this.ChatsService.findPagination(page,perPage);
      }
    @Post('search')
      async findQuery(@Body() SearchParams: any){
        return await this.ChatsService.findQuery(SearchParams);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
      return this.ChatsService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.ChatsService.remove(id);
    }
  }