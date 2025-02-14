import { Chat_messagesEntity } from 'src/chat_messages/entities/chat_messages.entity';
import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     CreateDateColumn,
     UpdateDateColumn,
     DeleteDateColumn,
     OneToMany,
     ManyToMany,
     JoinTable,
   } from 'typeorm';
   @Entity('chats', {orderBy: { CreateAt: 'DESC' } })
   export class ChatsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;  
    @Column({ nullable: true, length: 100 })
    chat_name: string;
    @OneToMany(() => Chat_messagesEntity, (message) => message.Hoten)
    messages: Chat_messagesEntity[];    
    @Column({ type: 'enum', enum: ['group', 'p2p'] })
    Type: string;
    @Column({ default: 1 })
    Ordering: number;
    @Column({ default: 0 })
    Status: number;
    @CreateDateColumn()
    CreateAt: Date;
    @UpdateDateColumn()
    UpdateAt: Date;
    @DeleteDateColumn()
    DeleteAt: Date;
    @Column({ nullable: true })
    idCreate: string;
   }