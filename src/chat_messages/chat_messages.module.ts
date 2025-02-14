import { Module } from '@nestjs/common';
  import { Chat_messagesService } from './chat_messages.service';
  import { Chat_messagesController } from './chat_messages.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { Chat_messagesEntity } from './entities/chat_messages.entity';
  @Module({
    imports: [TypeOrmModule.forFeature([Chat_messagesEntity])],
    controllers: [Chat_messagesController],
    providers: [Chat_messagesService],
    exports:[Chat_messagesService]
  })
  export class Chat_messagesModule {}