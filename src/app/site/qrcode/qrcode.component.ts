import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserQRCodeReader } from '@zxing/browser';
import { QrcodeService } from './qrcode.service';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-qrcode',
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class qrcodeComponent {
  @ViewChild('video', { static: false })
  videoElement!: ElementRef<HTMLVideoElement>;
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  private _QrcodeService: QrcodeService = inject(QrcodeService);
  Code: any;
  isCode: boolean = false;
  selectedDevice: any = null;
  isScan: boolean = false;
  codeReader: BrowserQRCodeReader | null = null;
  ListQrcode = signal<any[]>([]);
  Khachmoi: any;
  // Thêm thuộc tính để lưu trữ controls object
  private controls: any;

  constructor() {}

  async ngOnInit() {
    await this._QrcodeService.getAllQrcode();
    this.ListQrcode = this._QrcodeService.ListQrcode;
  }

  ngAfterViewInit() {
    this.codeReader = new BrowserQRCodeReader();
  }

  async startScan() {
    if (!this.codeReader || !this.videoElement) {
      console.error('Code reader or video element is not initialized.');
      return;
    }

    let debounceTimeout: any;

    try {
      this.controls = await this.codeReader.decodeFromVideoDevice(
        undefined,
        this.videoElement.nativeElement,
        async (result) => {
          if (!result) {
            return;
          }

          clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(async () => {
            this.isScan = false;
            const qrText = result.getText();
            console.log('QR Code:', qrText);

            const checkqrcode = await this._QrcodeService.getQrcodeBy({ qrcode: qrText });

            if (checkqrcode && checkqrcode.statusCode !== 404) {
              this.Khachmoi = checkqrcode;
              console.log(checkqrcode);

              if (!checkqrcode.checkedAt) {
                this.CheckinAuto(checkqrcode);

                // this.isCode = true;
                // this._snackBar.open('Nhập Code Xác Thực', '', {
                //   duration: 1000,
                //   horizontalPosition: 'end',
                //   verticalPosition: 'top',
                //   panelClass: ['snackbar-success'],
                // });


              } else {
                this._snackBar.open(`Khách Mời ${this.Khachmoi.name} đã Check In Rồi`, '', {
                  duration: 3000,
                  horizontalPosition: 'end',
                  verticalPosition: 'top',
                  panelClass: ['snackbar-warning'],
                });
              }
            } else {
              this._snackBar.open('Mã QR Code Không Đúng, Thử lại với QR Code Khác', '', {
                duration: 1000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                panelClass: ['snackbar-error'],
              });
            }
            // Stop scanning after processing
            this.controls.stop();
          }, 300); // Debounce delay of 300ms
        }
      );
    } catch (error) {
      console.error('Error during QR code scanning:', error);
    }
  }

  scan() {
    this.isScan = !this.isScan;
    if (this.isScan) {
      this.startScan();
    } else {
      // Dừng quét khi toggle tắt, kiểm tra controls tồn tại
      if (this.controls) {
        this.controls.stop();
      }
    }
  }
  async XacThuc() {
    const checkcode = await this._QrcodeService.getQrcodeBy({
      code: this.Code,
    });
    if (checkcode&&checkcode.statusCode !== 404) {
      checkcode.checkedAt = new Date();
      await this._QrcodeService.updateQrcode(checkcode);
      this._snackBar.open('Check In Thành Công', '', {
        duration: 1000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar-success'],
      });
      this.isCode = false;
    } 
    else {
      this._snackBar.open('Code Không Đúng', '', {
        duration: 1000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar-error'],
      });
    }
  }
  async CheckinAuto(checkqrcode: any) {
      checkqrcode.checkedAt = new Date();
      await this._QrcodeService.updateQrcode(checkqrcode);
      this._snackBar.open('Check In Thành Công', '', {
        duration: 1000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar-success'],
      });
      this.isCode = false;
    } 
}
