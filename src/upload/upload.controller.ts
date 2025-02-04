import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFile, UseInterceptors, HttpException, HttpStatus, Res, BadRequestException } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { GoogledriveService } from 'src/shared/googledrive/googledrive.service';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly googledriveService: GoogledriveService,
  ) {}

  // Endpoint to create a new upload entry
  // @Post()
  // create(@Body() createUploadDto: CreateUploadDto) {
  //   return this.uploadService.create(createUploadDto);
  // }
  @Post(':folder*') // Support dynamic folder paths
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        const folderPath = path.join(__dirname, '../../sandbox/images', req.params.folder || '');
        
        // Ensure the directory exists
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        
        cb(null, folderPath);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, `${uniqueSuffix}${ext}`); // Generate a unique filename
      },
    }),
  }))
  async uploadFileLocal(@UploadedFile() file: Express.Multer.File, @Param('folder') folder: string) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const filePath = folder ? `/${folder}/${file.filename}` : `/${file.filename}`;
    const Image: any = {
      Title: file.originalname,
      Metadata: {
        size: file.size,
        mimetype: file.mimetype,
        originalname: file.originalname,
        filename: file.filename,
      },
      filepath:filePath,
      Lienket:`/images${filePath}`,
      Type: 'local', 
    }
    const reponse = await this.uploadService.create(Image);
    return reponse;
  //  return {Image:Image, file:file,url: `/images${filePath}` }; // Return relative image path
  }
  
  // Endpoint to upload a file to Google Drive
  @Post('googledrive')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Query('folderId') folderId: string, // Receive folderId from query string
  ) {
    const result: any = await this.googledriveService.uploadFileFromBuffer(file, folderId);
    const data: any = {
      Title: file.originalname,
      fileId: result?.fileId,
      folderId: result?.folderId,
      Metadata: result?.Metadata,
      Type: 'googledrive',
    };
   const reponse = await this.uploadService.create(data);
    return reponse;
  }

  // Endpoint to retrieve all upload entries
  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  // Endpoint to update an upload entry by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.uploadService.update(id, data);
  }

  // Endpoint to delete an upload entry by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(id);
  }
  @Delete(':folder*/:filename')
  async deleteFile(@Param('folder') folder: string, @Param('filename') filename: string, @Res() res: Response) {
    const filePath = path.join(__dirname, '../../sandbox/images', folder, filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }

    // Delete the file
    fs.unlink(filePath, (err) => {
      if (err) {
        throw new HttpException('Error deleting file', HttpStatus.INTERNAL_SERVER_ERROR);
      }
      return res.json();
    });
  }
}
