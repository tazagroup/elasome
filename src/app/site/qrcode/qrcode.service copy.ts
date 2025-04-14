// import { Inject, Injectable, signal,Signal } from '@angular/core';
// import { Router } from '@angular/router';
// import { environment } from '../../../environments/environment.development';
// import { StorageService } from '../../shared/utils/storage.service';
// import { io } from 'socket.io-client';
// import { openDB } from 'idb';
// @Injectable({
//   providedIn: 'root'
// })
// export class QrcodeService {
//   constructor(
//     private _StorageService: StorageService,
//     private router: Router,
//   ) { }
//   ListQrcode = signal<any[]>([]);
//   DetailQrcode = signal<any>({});
//   qrcodeId = signal<string | null>(null);
//   setQrcodeId(id: string | null) {
//     this.qrcodeId.set(id);
//   }
//   private socket = io(`${environment.APIURL}`);
//   async CreateQrcode(dulieu: any) {
//     try {
//       const options = {
//           method:'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(dulieu),
//         };
//         const response = await fetch(`${environment.APIURL1}/quanlyqrcode`, options);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (!response.ok) {
//           this.handleError(response.status);
//         }
//         this.getAllQrcode()
//         this.qrcodeId.set(data.id)
//     } catch (error) {
//         return console.error(error);
//     }
//   }

//   async getAllQrcode() {
//     try {
//       // Gọi API chỉ để lấy `updatedAt` mới nhất
//       const options = {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${this._StorageService.getItem('token')}`
//         },
//       };
//       const response = await fetch(`${environment.APIURL1}/quanlyqrcode`, options);
//       if (!response.ok) {
//         this.handleError(response.status);
//       }
//       const data = await response.json();
//       this.ListQrcode.set(data);
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }



//   async getQrcodeBy(param: any) {
//     try {
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${this._StorageService.getItem('token')}`
//         },
//         body: JSON.stringify(param),
//       };
//       const response = await fetch(`${environment.APIURL1}/quanlyqrcode/findby`, options);      
//       if (!response.ok) {
//         this.handleError(response.status);
//       }
//       const data = await response.json();      
//       this.DetailQrcode.set(data)
//     } catch (error) {
//       return console.error(error);
//     }
//   }
//   async updateQrcode(dulieu: any) {
//     try {
//       const options = {
//           method:'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(dulieu),
//         };
//         const response = await fetch(`${environment.APIURL1}/quanlyqrcode/${dulieu.id}`, options);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (!response.ok) {
//           this.handleError(response.status);
//         }
//         this.getAllQrcode()
//         this.getQrcodeBy({id:data.id})
//     } catch (error) {
//         return console.error(error);
//     }
//   }
//   async DeleteQrcode(item:any) {    
//     try {
//         const options = {
//             method:'DELETE',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           };
//           const response = await fetch(`${environment.APIURL1}/quanlyqrcode/${item.id}`, options);
//           if (!response.ok) {
//             this.handleError(response.status);
//           }
//           this.getAllQrcode()
//       } catch (error) {
//           return console.error(error);
//       }
//   }
//   private handleError(status: number) {
//     let message = 'Lỗi không xác định';
//     switch (status) {
//       case 401:
//         message = 'Vui lòng đăng nhập lại';
//         break;
//       case 403:
//         message = 'Bạn không có quyền truy cập';
//         break;
//       case 500:
//         message = 'Lỗi máy chủ, vui lòng thử lại sau';
//         break;
//     }
//     const result = JSON.stringify({ code: status, title: message });
//     this.router.navigate(['/errorserver'], { queryParams: { data: result } });
//   }

// }