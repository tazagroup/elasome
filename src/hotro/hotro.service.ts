import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { In, Like, Repository } from 'typeorm';
  import { HotroEntity } from './entities/hotro.entity';
import { UsersService } from 'src/users/users.service';
  @Injectable()
  export class HotroService {
    constructor(
      @InjectRepository(HotroEntity)
      private HotroRepository: Repository<HotroEntity>,
      private _UsersService: UsersService,
    ) { }
    async create(data: any) {
      const check = await this.findSHD(data)
      if(!check) {
        this.HotroRepository.create(data);
        return await this.HotroRepository.save(data);
      }
      else {
        return { error: 1001, data: "Trùng Dữ Liệu" }
      }
  
    }
  
    async findAll(page: number, perPage: number) {
      const skip = (page - 1) * perPage;
      const totalItems = await this.HotroRepository.count();
      // Lấy danh sách Hotros theo phân trang
      const hotros = await this.HotroRepository.find({ skip, take: perPage });
      // Lấy danh sách user id duy nhất từ hotros
      const userIds = [...new Set(hotros.map((h: any) => h.idCreate))];
      // Truy vấn chỉ những user có id trong danh sách userIds
     const users = await this._UsersService.finduserIds(userIds); 
     console.error(users);
     
      //Tạo map từ user id sang tên người dùng
     const userMap = new Map(users.map((u: any) => [u.id, u.Hoten]));
     // Gán tên người dùng cho từng hotro
     hotros.forEach((h: any) => {
        h.Hoten = userMap.get(h.idCreate) || null;
      });
      return {
        currentPage: page,
        perPage,
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        data: hotros,
      };
    }
    
    async findid(id: string) {
      return await this.HotroRepository.findOne({ where: { id: id } });
    }
    async findSHD(data: any) {
      return await this.HotroRepository.findOne({
        where: {
          Title: data.Title,
          Type: data.Type
        },
      });
    }
    async findslug(Title: any) {
      return await this.HotroRepository.findOne({
        where: { Title: Title },
      });
    }
    async findPagination(page: number, perPage: number) {
      const skip = (page - 1) * perPage;
      const totalItems = await this.HotroRepository.count();
      const Hotros = await this.HotroRepository.find({ skip, take: perPage });
      return {
        currentPage: page,
        perPage,
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        data: Hotros,
      };
    }
    async findQuery(params: any) {
      console.error(params);
      const queryBuilder = this.HotroRepository.createQueryBuilder('Hotro');
      if (params.Batdau && params.Ketthuc) {
        queryBuilder.andWhere('Hotro.CreateAt BETWEEN :startDate AND :endDate', {
          startDate: params.Batdau,
          endDate: params.Ketthuc,
        });
      }
      if (params.Title) {
        queryBuilder.andWhere('Hotro.Title LIKE :Title', { SDT: `%${params.Title}%` });
      }
      const [items, totalCount] = await queryBuilder
        .limit(params.pageSize || 10) // Set a default page size if not provided
        .offset(params.pageNumber * params.pageSize || 0)
        .getManyAndCount();
      console.log(items, totalCount);
  
      return { items, totalCount };
    }
    async update(id: string, UpdateHotroDto: any) {
      this.HotroRepository.save(UpdateHotroDto);
      return await this.HotroRepository.findOne({ where: { id: id } });
    }
    async remove(id: string) {
      console.error(id)
      await this.HotroRepository.delete(id);
      return { deleted: true };
    }
  }