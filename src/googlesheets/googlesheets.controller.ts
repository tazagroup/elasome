import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
  import {GooglesheetsService } from './googlesheets.service';
  @Controller('googlesheets')
  export class GooglesheetsController {
    constructor(private readonly GooglesheetsService:GooglesheetsService) {}
  
  @Get()
  async getAll(@Query('sheetId') sheetId: string, @Query('sheetName') sheetName: string) {
    return await this.GooglesheetsService.findAll(sheetId, sheetName);
  }

  // POST /sheets
  @Post()
  async create(@Query('sheetId') sheetId: string, @Query('sheetName') sheetName: string, @Query('numfield') numfield: number, @Body() body: any) {
    return await this.GooglesheetsService.create(sheetId, sheetName, body,numfield);
  }

  // PUT /sheets/:row – update the row (pass the actual sheet row number; for example, 2 for the first data row)
  @Put(':row')
  async update(@Query('numfield') numfield: number,@Param('row') row: string, @Body() body: any) {
    const rowNumber = parseInt(row, 10);
    return await this.GooglesheetsService.update(rowNumber, body,numfield);
  }

  // DELETE /sheets/:row – clear the row contents
  @Delete(':row')
  async delete(@Param('row') row: string) {
    const rowNumber = parseInt(row, 10);
    return await this.GooglesheetsService.delete(rowNumber);
  }
}