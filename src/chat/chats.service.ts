import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Like, Repository } from 'typeorm';
  import { ChatsEntity } from './entities/chats.entity';
  @Injectable()
  export class ChatsService {
    constructor(
      @InjectRepository(ChatsEntity)
      private ChatsRepository: Repository<ChatsEntity>
    ) { }
    async create(data: any) {
      const check = await this.findSHD(data)
      if(!check) {
        this.ChatsRepository.create(data);
        return await this.ChatsRepository.save(data);
      }
      else {
        return { error: 1001, data: "Trùng Dữ Liệu" }
      }
  
    }
  
    async findAll() {
      return await this.ChatsRepository.find();
    }
    async findid(id: string) {
      return await this.ChatsRepository.findOne({ where: { id: id } });
    }
    async findSHD(data: any) {
      return await this.ChatsRepository.findOne({
        where: {
          Type: data.Type
        },
      });
    }
    async findslug(Title: any) {
      return await this.ChatsRepository.findOne({

      });
    }
    async findPagination(page: number, perPage: number) {
      const skip = (page - 1) * perPage;
      const totalItems = await this.ChatsRepository.count();
      const Chatss = await this.ChatsRepository.find({ skip, take: perPage });
      return {
        currentPage: page,
        perPage,
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        data: Chatss,
      };
    }
    async findQuery(params: any) {
      console.error(params);
      const queryBuilder = this.ChatsRepository.createQueryBuilder('Chats');
      if (params.Batdau && params.Ketthuc) {
        queryBuilder.andWhere('Chats.CreateAt BETWEEN :startDate AND :endDate', {
          startDate: params.Batdau,
          endDate: params.Ketthuc,
        });
      }
      if (params.Title) {
        queryBuilder.andWhere('Chats.Title LIKE :Title', { SDT: `%${params.Title}%` });
      }
      const [items, totalCount] = await queryBuilder
        .limit(params.pageSize || 10) // Set a default page size if not provided
        .offset(params.pageNumber * params.pageSize || 0)
        .getManyAndCount();
      console.log(items, totalCount);
  
      return { items, totalCount };
    }
    async update(id: string, UpdateChatsDto: any) {
      this.ChatsRepository.save(UpdateChatsDto);
      return await this.ChatsRepository.findOne({ where: { id: id } });
    }
    async remove(id: string) {
      console.error(id)
      await this.ChatsRepository.delete(id);
      return { deleted: true };
    }
  }