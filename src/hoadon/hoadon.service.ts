import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Like, Repository } from 'typeorm';
  import { HoadonEntity } from './entities/hoadon.entity';
  @Injectable()
  export class HoadonService {
    constructor(
      @InjectRepository(HoadonEntity)
      private HoadonRepository: Repository<HoadonEntity>
    ) { }
    async create(data: any) {
      const check = await this.findSHD(data)
      if(!check) {
        this.HoadonRepository.create(data);
        return await this.HoadonRepository.save(data);
      }
      else {
        return { error: 1001, data: "Trùng Dữ Liệu" }
      }
  
    }
  
    async findAll() {
      return await this.HoadonRepository.find();
    }
    async findid(id: string) {
      return await this.HoadonRepository.findOne({ where: { id: id } });
    }
    async findSHD(data: any) {
      return await this.HoadonRepository.findOne({
        where: {
          Title: data.Title,
          Type: data.Type
        },
      });
    }
    async findslug(Title: any) {
      return await this.HoadonRepository.findOne({
        where: { Title: Title },
      });
    }
    async findPagination(page: number, perPage: number) {
      const skip = (page - 1) * perPage;
      const totalItems = await this.HoadonRepository.count();
      const Hoadons = await this.HoadonRepository.find({ skip, take: perPage });
      return {
        currentPage: page,
        perPage,
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        data: Hoadons,
      };
    }
    async findQuery(params: any) {
      console.error(params);
      const queryBuilder = this.HoadonRepository.createQueryBuilder('Hoadon');
      if (params.Batdau && params.Ketthuc) {
        queryBuilder.andWhere('Hoadon.CreateAt BETWEEN :startDate AND :endDate', {
          startDate: params.Batdau,
          endDate: params.Ketthuc,
        });
      }
      if (params.Title) {
        queryBuilder.andWhere('Hoadon.Title LIKE :Title', { SDT: `%${params.Title}%` });
      }
      const [items, totalCount] = await queryBuilder
        .limit(params.pageSize || 10) // Set a default page size if not provided
        .offset(params.pageNumber * params.pageSize || 0)
        .getManyAndCount();
      console.log(items, totalCount);
  
      return { items, totalCount };
    }
    async update(id: string, UpdateHoadonDto: any) {
      this.HoadonRepository.save(UpdateHoadonDto);
      return await this.HoadonRepository.findOne({ where: { id: id } });
    }
    async remove(id: string) {
      console.error(id)
      await this.HoadonRepository.delete(id);
      return { deleted: true };
    }
  }