import { Component } from '@angular/core';
import { SwiperComponent } from '../../shared/common/swiper/swiper.component';
import { KeyfiguresComponent } from './keyfigures/keyfigures.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { ProductsComponent } from '../../shared/common/products/products.component';
import { BannerctaComponent } from '../../shared/common/bannercta/bannercta.component';
import { BaivietComponent } from '../../shared/common/baiviet/baiviet.component';
import { ContactformComponent } from '../../shared/common/contactform/contactform.component';

@Component({
  selector: 'app-home',
  imports: [
    SwiperComponent,
    KeyfiguresComponent,
    GioithieuComponent,
    ProductsComponent,
    BannerctaComponent,
    BaivietComponent,
    ContactformComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ChuyenGiaConfig = {
    // Các tùy chọn của Swiper
    slidesPerView: 3,
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
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  }
}
