import { Module } from '@nestjs/common';
  import { HoadonService } from './hoadon.service';
  import { HoadonController } from './hoadon.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { HoadonEntity } from './entities/hoadon.entity';
  @Module({
    imports: [TypeOrmModule.forFeature([HoadonEntity])],
    controllers: [HoadonController],
    providers: [HoadonService],
    exports:[HoadonService]
  })
  export class HoadonModule {}