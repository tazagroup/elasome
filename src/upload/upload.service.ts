import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { UploadEntity } from './entities/upload.entity';
@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(UploadEntity)
    private UploadRepository: Repository<UploadEntity>,
  ) {}
  async create(data: any) {
    const check = await this.findSHD(data);
    if (!check) {
      this.UploadRepository.create(data);
      return await this.UploadRepository.save(data);
    } else {
      return { error: 1001, data: 'Trùng Dữ Liệu' };
    }
  }

  async findAll() {
    const result = await this.UploadRepository.find();
    // console.log(result);
    // result.forEach((v:any) => {
    //   v.Content.push({id:v.Content.length+1,type:'text',detail:v.Mota})
    //   this.update(v.id,v)
    //   console.log(v);

    // });
    return result;
  }
  async findid(id: string) {
    const result = await this.UploadRepository.findOne({ where: { id: id } });
    if (result) {
      return result;
    } else {
      return { error: 1001, data: 'Không Tồn Tại' };
    }
  }
  async findSHD(data: any) {
    const result = await this.UploadRepository
    .createQueryBuilder('upload')
    .where("JSON_UNQUOTE(JSON_EXTRACT(upload.Metadata, '$.size')) = :size", { size: data.Metadata.size })
    .andWhere("JSON_UNQUOTE(JSON_EXTRACT(upload.Metadata, '$.mimetype')) = :mimetype", { mimetype: data.Metadata.mimetype })
    .andWhere("JSON_UNQUOTE(JSON_EXTRACT(upload.Metadata, '$.originalname')) = :originalname", { originalname: data.Metadata.originalname })
    .getOne();  // hoặc getMany() nếu bạn mong muốn nhiều kết quả
    return result
  }
  async findslug(Title: any) {
    return await this.UploadRepository.findOne({
      where: { Title: Title },
    });
  }
  async findPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const totalItems = await this.UploadRepository.count();
    const uploads = await this.UploadRepository.find({ skip, take: perPage });
    return {
      currentPage: page,
      perPage,
      totalItems,
      totalPages: Math.ceil(totalItems / perPage),
      data: uploads,
    };
  }
  async findQuery(params: any) {
    // console.error(params);
    const queryBuilder = this.UploadRepository.createQueryBuilder('upload');
    if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
      queryBuilder.andWhere('upload.CreateAt BETWEEN :startDate AND :endDate', {
        startDate: params.Batdau,
        endDate: params.Ketthuc,
      });
    }
    if (params.hasOwnProperty('Title')) {
      queryBuilder.andWhere('upload.Title LIKE :Title', {
        SDT: `%${params.Title}%`,
      });
    }
    if (params.hasOwnProperty('idDM')) {
      queryBuilder.andWhere('upload.idDM LIKE :idDM', { idDM: params.idDM });
    }
    if (params.hasOwnProperty('isDelete')) {
      queryBuilder.andWhere('upload.isDelete LIKE :isDelete', {
        isDelete: params.isDelete,
      });
    }
    const [result, totalCount] = await queryBuilder
      .limit(params.pageSize || 10) // Set a default page size if not provided
      .offset(params.pageNumber * params.pageSize || 0)
      .getManyAndCount();
    let items: any = [];
    if (params.hasOwnProperty('idUser')) {
      items = result.filter((v: any) =>
        v.idUser.some((v1: any) => v1.idUser == params.idUser),
      );
    } else {
      items = result;
    }
    return { items, totalCount };
  }
  async update(id: string, UpdateUploadDto: any) {
    await this.UploadRepository.save(UpdateUploadDto);
    return await this.UploadRepository.findOne({ where: { id: id } });
  }
  async remove(id: string) {
    console.error(id);
    await this.UploadRepository.delete(id);
    return { deleted: true };
  }
}
