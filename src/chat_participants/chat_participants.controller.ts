import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
  import {Chat_participantsService } from './chat_participants.service';
  @Controller('Chat_participants')
  export class Chat_participantsController {
    constructor(private readonly Chat_participantsService:Chat_participantsService) {}
  
    @Post()
    create(@Body() data: any) {
      return this.Chat_participantsService.create(data);
    }
    @Get()
    async findAll() {
      return await this.Chat_participantsService.findAll();
    }
    @Get('findid/:id')
    async findOne(@Param('id') id: string) {
      return await this.Chat_participantsService.findid(id);
    }
    @Get('findslug/:slug')
    async findslug(@Param('slug') slug: string) {
      return await this.Chat_participantsService.findslug(slug);
    }
    @Get('pagination')
    async findPagination(@Query('page') page: number,@Query('perPage') perPage: number){
         return await this.Chat_participantsService.findPagination(page,perPage);
      }
    @Post('search')
      async findQuery(@Body() SearchParams: any){
        return await this.Chat_participantsService.findQuery(SearchParams);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
      return this.Chat_participantsService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.Chat_participantsService.remove(id);
    }
  }