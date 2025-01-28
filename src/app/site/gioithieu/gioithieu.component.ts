import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadscrumbComponent } from '../../shared/common/breadscrumb/breadscrumb.component';
import { Sanphams } from '../../shared/mockdata/sanpham';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { SwiperComponent } from '../../shared/common/swiper/swiper.component';
import { Baiviets } from '../../shared/mockdata/baiviet';
import { Gioithieus } from '../../shared/mockdata/gioithieu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-gioithieu',
  imports: [
    CommonModule,
    BreadscrumbComponent,
    MatTabsModule,
    MatExpansionModule,
    SwiperComponent,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './gioithieu.component.html',
  styleUrl: './gioithieu.component.scss'
})
export class GioithieuComponent {
  Gioithieu: any={};
  ListGioithieu: any[]=Gioithieus;
  Breadcrumbs: any[] = [];
  Config:any={
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  }
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const slugSP = this.route.snapshot.paramMap.get('slug');
    const result = slugSP?.split("-v6")[0];
    console.log(result);
    this.Gioithieu = this.ListGioithieu.find(v=>v.Slug==result);
    console.log(this.Gioithieu);
    this.Breadcrumbs=[
      {name: 'Trang chủ', link: '/'},
      {name: 'Danh sách sản phẩm', link: '/danh-muc'},
      {name: this.Gioithieu?.Title, link: `${this.Gioithieu?.slug}-v6`}
    ]
    console.log(this.Breadcrumbs);
    
  }
}
