import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elasome';
  constructor(private titleService: Title, private metaService: Meta) { }
  ngOnInit() {
    this.titleService.setTitle('My Dynamic Title'); 
    this.metaService.addTags([
      { name: 'description', content: 'Elasome - Giải pháp chăm sóc da toàn diện với công nghệ tiên tiến, mang lại làn da khỏe mạnh, rạng rỡ.' },
      { name: 'keywords', content: 'Elasome, chăm sóc da, công nghệ, làm đẹp, skincare, mỹ phẩm, da khỏe mạnh' },
      { name: 'author', content: 'Tên tác giả hoặc công ty' },

      { property: 'og:title', content: 'Elasome' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'URL của trang web' },
      { property: 'og:image', content: 'URL của hình ảnh đại diện' },
      { property: 'og:description', content: 'Mô tả ngắn gọn, hấp dẫn về Elasome.' },
      { property: 'og:site_name', content: 'Tên trang web' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Elasome' },
      { name: 'twitter:description', content: 'Mô tả ngắn gọn, hấp dẫn về Elasome.' },
      { name: 'twitter:image', content: 'URL của hình ảnh đại diện' }
    ]);
  }
}
