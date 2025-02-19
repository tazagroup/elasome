import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Like, Repository } from 'typeorm';
  import { GooglesheetsEntity } from './entities/googlesheets.entity';
  import { google } from 'googleapis';
import * as path from 'path';
  @Injectable()
  export class GooglesheetsService {
    private sheets;
    // Replace with your Google Sheet ID and sheet name (tab)
    private spreadsheetId = '12Mjlh55kVxdX_12bgITi-zHDsa8EO9Puc6bSOkleIjg';
    private sheetName = 'TestAPI';
    constructor(
      @InjectRepository(GooglesheetsEntity)
      private GooglesheetsRepository: Repository<GooglesheetsEntity>
    ) { 
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, 'credentials.json'), // adjust path as needed
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
  
      this.sheets = google.sheets({ version: 'v4', auth });
    }
    // READ: Get all data rows (assuming the first row is a header)
    async findAll(sheetId:any, sheetName:any): Promise<any[]> {
      const res = await this.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: `${sheetName}!A:Z`, // adjust the range based on your sheet
      });
      console.log(res);
      
      const rows = res.data.values;
      if (!rows) {
        return [];
      }
      // Map each row to an object (customize the fields as needed)
      return rows.map((row) => ({
        id: row[0],
        name: row[1],
        email: row[2],
        phone: row[3],
        address: row[4],
        city: row[5],
        other: row[6],
      }));
    }
  
    // CREATE: Append a new row to the sheet
    async create(sheetId: any, sheetName: any, data: any,numfield:any=1): Promise<any> {   
        const values = data.map((item:any) => 
          Array.from({ length: numfield }, (_, i) => item[`field${i + 1}`] || '')
        );

      // const values = [Array.from({ length: numfield }, (_, i) => data[`field${i + 1}`] || '')];
      const res = await this.sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
      });
      return res.data;
    }
  
    // UPDATE: Update an existing row by row number (e.g. row 2 is the first data row)
    async update(rowNumber: number, data: any,numfield:any=1): Promise<any> {
      const values = [Array.from({ length: numfield }, (_, i) => data[`field${i + 1}`] || '')];
      const range = `${this.sheetName}!A${rowNumber}:G${rowNumber}`;
      const res = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values },
      });
      return res.data;
    }
  
    // DELETE: Clear the contents of a row (since deletion isn’t directly supported)
    async delete(rowNumber: number): Promise<any> {
      const range = `${this.sheetName}!A${rowNumber}:G${rowNumber}`;
      const res = await this.sheets.spreadsheets.values.clear({
        spreadsheetId: this.spreadsheetId,
        range,
      });
      return res.data;
    }
  }