import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
  import {Chat_messagesService } from './chat_messages.service';
  @Controller('Chat_messages')
  export class Chat_messagesController {
    constructor(private readonly Chat_messagesService:Chat_messagesService) {}
  
    @Post()
    create(@Body() data: any) {
      return this.Chat_messagesService.create(data);
    }
    @Get()
    async findAll() {
      return await this.Chat_messagesService.findAll();
    }
    @Get('findid/:id')
    async findOne(@Param('id') id: string) {
      return await this.Chat_messagesService.findid(id);
    }
    @Get('findslug/:slug')
    async findslug(@Param('slug') slug: string) {
      return await this.Chat_messagesService.findslug(slug);
    }
    @Get('pagination')
    async findPagination(@Query('page') page: number,@Query('perPage') perPage: number){
         return await this.Chat_messagesService.findPagination(page,perPage);
      }
    @Post('search')
      async findQuery(@Body() SearchParams: any){
        return await this.Chat_messagesService.findQuery(SearchParams);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
      return this.Chat_messagesService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.Chat_messagesService.remove(id);
    }
  }