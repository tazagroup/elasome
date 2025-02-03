import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
@Component({
  selector: 'app-vantay',
  imports: [],
  providers: [FingerprintAIO],
  templateUrl: './vantay.component.html',
  styleUrl: './vantay.component.scss'
})
export class VantayComponent {
  constructor(private faio: FingerprintAIO) {}
  
  authenticate() {
    this.faio.show({
      title: 'Xác thực bằng vân tay',
      subtitle: 'Đăng nhập an toàn',
      description: 'Đặt ngón tay lên cảm biến',
      fallbackButtonTitle: 'Dùng mật khẩu'
    })
    .then((result: any) => {
      console.log('Xác thực thành công', result);
      alert('Xác thực thành công!');
    })
    .catch((error: any) => {
      console.error('Xác thực thất bại', error);
      alert('Xác thực thất bại!');
    });
  }
  
}
