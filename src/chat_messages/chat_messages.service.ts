import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Like, Repository } from 'typeorm';
  import { Chat_messagesEntity } from './entities/chat_messages.entity';
  @Injectable()
  export class Chat_messagesService {
    constructor(
      @InjectRepository(Chat_messagesEntity)
      private Chat_messagesRepository: Repository<Chat_messagesEntity>
    ) { }
    async create(data: any) {
      const check = await this.findSHD(data)
      if(!check) {
        this.Chat_messagesRepository.create(data);
        return await this.Chat_messagesRepository.save(data);
      }
      else {
        return { error: 1001, data: "Trùng Dữ Liệu" }
      }
  
    }
  
    async findAll() {
      return await this.Chat_messagesRepository.find();
    }
    async findid(id: string) {
      return await this.Chat_messagesRepository.findOne({ where: { id: id } });
    }
    async findSHD(data: any) {
      return await this.Chat_messagesRepository.findOne({
        where: {
          Title: data.Title,
          Type: data.Type
        },
      });
    }
    async findslug(Title: any) {
      return await this.Chat_messagesRepository.findOne({
        where: { Title: Title },
      });
    }
    async findPagination(page: number, perPage: number) {
      const skip = (page - 1) * perPage;
      const totalItems = await this.Chat_messagesRepository.count();
      const Chat_messagess = await this.Chat_messagesRepository.find({ skip, take: perPage });
      return {
        currentPage: page,
        perPage,
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        data: Chat_messagess,
      };
    }
    async findQuery(params: any) {
      console.error(params);
      const queryBuilder = this.Chat_messagesRepository.createQueryBuilder('Chat_messages');
      if (params.Batdau && params.Ketthuc) {
        queryBuilder.andWhere('Chat_messages.CreateAt BETWEEN :startDate AND :endDate', {
          startDate: params.Batdau,
          endDate: params.Ketthuc,
        });
      }
      if (params.Title) {
        queryBuilder.andWhere('Chat_messages.Title LIKE :Title', { SDT: `%${params.Title}%` });
      }
      const [items, totalCount] = await queryBuilder
        .limit(params.pageSize || 10) // Set a default page size if not provided
        .offset(params.pageNumber * params.pageSize || 0)
        .getManyAndCount();
      console.log(items, totalCount);
  
      return { items, totalCount };
    }
    async update(id: string, UpdateChat_messagesDto: any) {
      this.Chat_messagesRepository.save(UpdateChat_messagesDto);
      return await this.Chat_messagesRepository.findOne({ where: { id: id } });
    }
    async remove(id: string) {
      console.error(id)
      await this.Chat_messagesRepository.delete(id);
      return { deleted: true };
    }
  }