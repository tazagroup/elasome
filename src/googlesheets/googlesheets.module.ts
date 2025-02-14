import { Module } from '@nestjs/common';
  import { GooglesheetsService } from './googlesheets.service';
  import { GooglesheetsController } from './googlesheets.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { GooglesheetsEntity } from './entities/googlesheets.entity';
  @Module({
    imports: [TypeOrmModule.forFeature([GooglesheetsEntity])],
    controllers: [GooglesheetsController],
    providers: [GooglesheetsService],
    exports:[GooglesheetsService]
  })
  export class GooglesheetsModule {}