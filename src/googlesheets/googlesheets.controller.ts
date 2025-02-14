import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
  import {GooglesheetsService } from './googlesheets.service';
  @Controller('googlesheets')
  export class GooglesheetsController {
    constructor(private readonly GooglesheetsService:GooglesheetsService) {}
  
    @Get()
  async getAll() {
    return await this.GooglesheetsService.findAll();
  }

  // POST /sheets
  @Post()
  async create(@Body() body: any) {
    return await this.GooglesheetsService.create(body);
  }

  // PUT /sheets/:row – update the row (pass the actual sheet row number; for example, 2 for the first data row)
  @Put(':row')
  async update(@Param('row') row: string, @Body() body: any) {
    const rowNumber = parseInt(row, 10);
    return await this.GooglesheetsService.update(rowNumber, body);
  }

  // DELETE /sheets/:row – clear the row contents
  @Delete(':row')
  async delete(@Param('row') row: string) {
    const rowNumber = parseInt(row, 10);
    return await this.GooglesheetsService.delete(rowNumber);
  }
}