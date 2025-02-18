import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     CreateDateColumn,
     UpdateDateColumn,
     DeleteDateColumn,
   } from 'typeorm';
   @Entity('chats', {orderBy: { CreateAt: 'DESC' } })
   export class ChatsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;  
    @Column({collation: "utf8_general_ci"})
    idUser: string;
    @Column({collation: "utf8_general_ci"})
    Title: string;
    @Column({collation: "utf8_general_ci"})
    Message: string;
    @Column({collation: "utf8_general_ci"})
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