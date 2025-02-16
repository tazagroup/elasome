import { Module } from '@nestjs/common';
  import { HotroService } from './hotro.service';
  import { HotroController } from './hotro.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { HotroEntity } from './entities/hotro.entity';
import { UsersModule } from 'src/users/users.module';
  @Module({
    imports: [
      TypeOrmModule.forFeature([HotroEntity]),
      UsersModule
    ],
    controllers: [HotroController],
    providers: [HotroService],
    exports:[HotroService]
  })
  export class HotroModule {}