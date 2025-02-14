import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Like, Repository } from 'typeorm';
  import { Chat_participantsEntity } from './entities/chat_participants.entity';
  @Injectable()
  export class Chat_participantsService {
    constructor(
      @InjectRepository(Chat_participantsEntity)
      private Chat_participantsRepository: Repository<Chat_participantsEntity>
    ) { }
    async create(data: any) {
      const check = await this.findSHD(data)
      if(!check) {
        this.Chat_participantsRepository.create(data);
        return await this.Chat_participantsRepository.save(data);
      }
      else {
        return { error: 1001, data: "Trùng Dữ Liệu" }
      }
  
    }
  
    async findAll() {
      return await this.Chat_participantsRepository.find();
    }
    async findid(id: string) {
      return await this.Chat_participantsRepository.findOne({ where: { id: id } });
    }
    async findSHD(data: any) {
      return await this.Chat_participantsRepository.findOne({
        where: {
          Title: data.Title,
          Type: data.Type
        },
      });
    }
    async findslug(Title: any) {
      return await this.Chat_participantsRepository.findOne({
        where: { Title: Title },
      });
    }
    async findPagination(page: number, perPage: number) {
      const skip = (page - 1) * perPage;
      const totalItems = await this.Chat_participantsRepository.count();
      const Chat_participantss = await this.Chat_participantsRepository.find({ skip, take: perPage });
      return {
        currentPage: page,
        perPage,
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        data: Chat_participantss,
      };
    }
    async findQuery(params: any) {
      console.error(params);
      const queryBuilder = this.Chat_participantsRepository.createQueryBuilder('Chat_participants');
      if (params.Batdau && params.Ketthuc) {
        queryBuilder.andWhere('Chat_participants.CreateAt BETWEEN :startDate AND :endDate', {
          startDate: params.Batdau,
          endDate: params.Ketthuc,
        });
      }
      if (params.Title) {
        queryBuilder.andWhere('Chat_participants.Title LIKE :Title', { SDT: `%${params.Title}%` });
      }
      const [items, totalCount] = await queryBuilder
        .limit(params.pageSize || 10) // Set a default page size if not provided
        .offset(params.pageNumber * params.pageSize || 0)
        .getManyAndCount();
      console.log(items, totalCount);
  
      return { items, totalCount };
    }
    async update(id: string, UpdateChat_participantsDto: any) {
      this.Chat_participantsRepository.save(UpdateChat_participantsDto);
      return await this.Chat_participantsRepository.findOne({ where: { id: id } });
    }
    async remove(id: string) {
      console.error(id)
      await this.Chat_participantsRepository.delete(id);
      return { deleted: true };
    }
  }