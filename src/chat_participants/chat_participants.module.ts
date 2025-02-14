import { Module } from '@nestjs/common';
  import { Chat_participantsService } from './chat_participants.service';
  import { Chat_participantsController } from './chat_participants.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { Chat_participantsEntity } from './entities/chat_participants.entity';
  @Module({
    imports: [TypeOrmModule.forFeature([Chat_participantsEntity])],
    controllers: [Chat_participantsController],
    providers: [Chat_participantsService],
    exports:[Chat_participantsService]
  })
  export class Chat_participantsModule {}