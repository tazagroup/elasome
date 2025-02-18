import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     CreateDateColumn,
     UpdateDateColumn,
     DeleteDateColumn,
   } from 'typeorm';
   @Entity('hotro', {orderBy: { CreateAt: 'DESC' } })
   export class HotroEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('[]')" })
    idUsers: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('[]')" })
    idChat: string;
    @Column({collation: "utf8_general_ci"})
    Title: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    Dexuat: string;
    @Column({ default: '' })
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