import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoadonchitietModule } from './hoadonchitiet/hoadonchitiet.module';
import { TodoModule } from './todo/todo.module';
import { TodocategoryModule } from './todocategory/todocategory.module';
import { CategoryModule } from './category/category.module';
import { GoogledriveModule } from './shared/googledrive/googledrive.module';
import { UploadModule } from './upload/upload.module';
import { HighlightModule } from './highlight/highlight.module';
import { DexuatModule } from './dexuat/dexuat.module';
import { SettingModule } from './settings/settings.module';
import { AclModule } from './acl/acl.module';
import { ConversationModule } from './conversations/conversations.module';
import { MenuModule } from './menu/menu.module';
import { HotroModule } from './hotro/hotro.module';
import { GooglesheetsModule } from './googlesheets/googlesheets.module';
import { HoadonModule } from './hoadon/hoadon.module';
import { ChatsModule } from './chat/chats.module';
import { Chat_messagesModule } from './chat_messages/chat_messages.module';
import { Chat_participantsModule } from './chat_participants/chat_participants.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.221.222.71',
      port: 3306,
      username: 'tazaspac_chikiet',
      password: '@Hikiet88',
      database: 'tazaspac_elasome',
      autoLoadEntities: true,
      synchronize: true,
      charset: "utf8mb4",
    }),
    UsersModule,
    HoadonchitietModule,
    TodoModule,
    TodocategoryModule,
    CategoryModule,
    GoogledriveModule,
    UploadModule,
    HighlightModule,
    DexuatModule,
    SettingModule,
    AclModule,
    ConversationModule,
    MenuModule,
    HotroModule,
    GooglesheetsModule,
    HoadonModule,
    ChatsModule,
    Chat_messagesModule,
    Chat_participantsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}