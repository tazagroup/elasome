import { Component, ViewChild } from '@angular/core';
import { groupByCustomfield, nest } from '../../shared/utils/shared.utils';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = [
    {
      "id": 1,
      "Title": "Trang chủ",
      "Slug": "trang-chu",
      "Level": 1,
      "pid": null
    },
    {
      "id": 2,
      "Title": "Sản phẩm theo tình trạng da",
      "Slug": "san-pham-theo-tinh-trang-da",
      "Level": 1,
      "pid": null
    },
    {
      "id": 3,
      "Title": "Nâng cơ - Lão hóa (M1)",
      "Slug": "nang-co-lao-hoa-m1",
      "Level": 2,
      "pid": 2
    },
    {
      "id": 4,
      "Title": "Nám và trắng da (M3, M4)",
      "Slug": "nam-va-trang-da-m3-m4",
      "Level": 2,
      "pid": 2
    },
    {
      "id": 5,
      "Title": "Phục hồi tái tạo (M1,M2,M3,M4,M5)",
      "Slug": "phuc-hoi-tai-tao-m1-m2-m3-m4-m5",
      "Level": 2,
      "pid": 2
    },
    {
      "id": 6,
      "Title": "Cấp ẩm căng bóng (M1, M2,M3,M4,M5)",
      "Slug": "cap-am-cang-bong-m1-m2-m3-m4-m5",
      "Level": 2,
      "pid": 2
    },
    {
      "id": 7,
      "Title": "Exosome đông khô (M4)",
      "Slug": "exosome-dong-kho-m4",
      "Level": 2,
      "pid": 2
    },
    {
      "id": 8,
      "Title": "Giảm mỡ",
      "Slug": "giam-mo",
      "Level": 2,
      "pid": 2
    },
    {
      "id": 9,
      "Title": "Tin tức sự kiện",
      "Slug": "tin-tuc-su-kien",
      "Level": 1,
      "pid": null
    },
    {
      "id": 10,
      "Title": "Báo cáo chuyên đề",
      "Slug": "bao-cao-chuyen-de",
      "Level": 2,
      "pid": 9
    },
    {
      "id": 11,
      "Title": "Hội thảo",
      "Slug": "hoi-thao",
      "Level": 2,
      "pid": 9
    },
    {
      "id": 12,
      "Title": "Ký kết hợp tác",
      "Slug": "ky-ket-hop-tac",
      "Level": 2,
      "pid": 9
    },
    {
      "id": 13,
      "Title": "Chứng nhận giải thưởng",
      "Slug": "chung-nhan-giai-thuong",
      "Level": 2,
      "pid": 9
    },
    {
      "id": 14,
      "Title": "Về Elasome",
      "Slug": "ve-elasome",
      "Level": 1,
      "pid": null
    },
    {
      "id": 15,
      "Title": "Giới thiệu",
      "Slug": "gioi-thieu",
      "Level": 2,
      "pid": 14
    },
    {
      "id": 16,
      "Title": "Bảng cấp chứng nhận",
      "Slug": "bang-cap-chung-nhan",
      "Level": 2,
      "pid": 14
    },
    {
      "id": 17,
      "Title": "Khoa học dành cho đại lý",
      "Slug": "khoa-hoc-danh-cho-dai-ly",
      "Level": 2,
      "pid": 14
    },
    {
      "id": 18,
      "Title": "Đăng ký demo",
      "Slug": "dang-ky-demo",
      "Level": 2,
      "pid": 14
    },
    {
      "id": 19,
      "Title": "Danh sách đại lý chính thức",
      "Slug": "danh-sach-dai-ly-chinh-thuc",
      "Level": 2,
      "pid": 14
    },
    {
      "id": 20,
      "Title": "Liên hệ",
      "Slug": "lien-he",
      "Level": 1,
      "pid": null
    }
  ]
  Menus:any[]=[]
  nestData = (data:any) => {
    const m:any = new Map(data.map((o:any) => [o.id, {...o, children: []}]));
    data.forEach((o:any) => o.pid && m.get(o.pid).children.push(m.get(o.id)));
    return data.filter((o:any) => !o.pid).map((o:any) => m.get(o.id));
  };

  ngOnInit(): void {
    this.Menus = this.nestData(this.data)
    console.log(this.nestData(this.data));
    
    console.log(this.Menus);
    
  }
}
