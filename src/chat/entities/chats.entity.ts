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
  
    @CreateDateColumn()
    created_at: Date;
  
    @OneToMany(() => Message, (message) => message.chat)
    messages: Message[];
  
    @ManyToMany(() => User)
    @JoinTable({
      name: 'chat_participants',
      joinColumn: { name: 'chat_id', referencedColumnName: 'chat_id' },
      inverseJoinColumn: { name: 'user_id', referencedColumnName: 'user_id' },
    })
    participants: User[];
    
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