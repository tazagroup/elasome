import { Component, inject, ViewChild, Inject, PLATFORM_ID, signal, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { conver, ListHotro, ListType } from '../listhotro';
import { HotrosService } from '../listhotro.service';
import { EditorjsComponent } from '../../../../shared/common/editorjs/editorjs.component';
import { ListHotroComponent } from '../listhotro.component';
import html2canvas from 'html2canvas';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
  @Component({
    selector: 'app-detailhotro',
    templateUrl: './detailhotro.component.html',
    styleUrl: './detailhotro.component.scss',
    imports: [
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatMenuModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      CommonModule,
      FormsModule,
      MatDatepickerModule,
      EditorjsComponent,
    ],
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class DetailHotroComponent {
    Detail: any = {};
    dataSource!: MatTableDataSource<any>;
    displayedColumns: string[] = [];
    ColumnName: any = { 'STT': 'STT' };
    FilterColumns: any[] = [];
    Columns: any[] = [];
    Listhotro: any[] = ListHotro;
    toolbar:any[] = [
      'heading',
      'alignment',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'undo',
      'redo',
    ]
    tickets: any[] = conver.tickets
    users: any[] = conver.users;
    channels: any[] = conver.channels;
    replies: any[] = conver.replies;
    ListItem: any[] = [{Title:'',Thanhtien:0,Ghichu:''}];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
    constructor(
      private _breakpointObserver: BreakpointObserver,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {
      if (isPlatformBrowser(this.platformId)) {
        this.FilterColumns = JSON.parse(localStorage.getItem('hotro_FilterColumns') || '[]');
      }
    }
    private _hotrosService: HotrosService = inject(HotrosService);
    _router:ActivatedRoute = inject(ActivatedRoute)
    _route:Router = inject(Router)
    _ListHotroComponent:ListHotroComponent = inject(ListHotroComponent)
    // Dexuat = {
    //   Nguoinhan: "BGĐ",
    //   Ketoan:"",
    //   Nguoidexuat: "Phạm Chí Kiệt",
    //   Truongbophan:"Trần Mỹ Duyên",
    //   Title: "Gia hạn OA Zalo Timona Academy",
    //   Bophan: "Marketing",
    //   Vitri: "Leader IT",
    //   Ngaytao: new Date(),
    //   Tongtien: 2730000,
    //   Tamung: 2730000,
    //   TongChi: 2730000,
    //   Chitiet: [
    //     { id: 1, Title: "Gia Hạn OA Zalo Timona Academy Thủ Đức 12 Tháng", Thanhtien: 1068000, Ghichu: "25/01/2025 - 25/01/2026" },
    //     { id: 2, Title: "Gia Hạn OA Zalo Timona Academy Nha Trang 12 Tháng", Thanhtien: 1068000, Ghichu: "25/01/2025 - 25/01/2026" },
    //     { id: 3, Title: "Gia Hạn OA Zalo Timona Academy CMT8 6 Tháng", Thanhtien: 594000, Ghichu: "22/01/2025 - 22/07/2025" }
    //   ],
    //   Tienbangchu: "Hai triệu bảy trăm ba mươi ngàn"
    // };
    async ngOnInit(): Promise<void> { 
      this._router.paramMap.subscribe(async (data: any) => {
        const paramsId = data.get('id');
        if (paramsId) {
          await this._hotrosService.getHotroByid(paramsId).then(() => {
            this.Detail = this._hotrosService.Hotro();
            this.Detail.Dexuat.Chitiet = this.Detail.Dexuat.Chitiet || [];
            this.Detail.Dexuat.Ngaytao = new Date(this.Detail.Dexuat.Ngaytao);
            this._ListHotroComponent.drawer.open();
            });

        } else {
        this._ListHotroComponent.drawer.close();
        }
      });
      // this.setupDrawer();
    }
 getUserName(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.username : 'Unknown';
  }
  getTypeName(item:any){
    return ListType.find((type) => type.value === item)?.Title || 'Unknown';
  }
  printContent()
  {
    const element = document.getElementById('printContent');
    if (!element) return;

    html2canvas(element, { scale: 2 }).then(canvas => {
      const imageData = canvas.toDataURL('image/png');

      // Mở cửa sổ mới và in ảnh
      const printWindow = window.open('', '_blank');
      if (!printWindow) return;

      printWindow.document.write(`
        <html>
          <head>
            <title>${this.Detail?.Title}</title>
          </head>
          <body style="text-align: center;">
            <img src="${imageData}" style="max-width: 100%;"/>
            <script>
              window.onload = function() {
                window.print();
                window.onafterprint = function() { window.close(); };
              };
            </script>
          </body>
        </html>
      `);

      printWindow.document.close();
    });
  }
  getChannelName(channelId: number): string {
    const channel = this.channels.find((c) => c.id === channelId);
    return channel ? channel.name : 'Unknown';
  }
  onEditorChange(event: any) {
    console.log(event);
    
  }
  RemoveItem(index: number) {
    this.Detail.Dexuat.Chitiet.splice(index, 1);
  }
  saveContent()
  {     
      this.Detail.Dexuat.Tongtien = this.Detail.Dexuat.Chitiet.reduce((sum:any, item:any) => sum + item.Thanhtien, 0);
      this.Detail.Dexuat.TongChi = this.Detail.Dexuat.Tongtien - this.Detail.Dexuat.Tamung;
      console.log(this.Detail);
      this.drawer.close();
      this._hotrosService.updateOneHotro(this.Detail).then(() => {
        this.ngOnInit();
      });
  }
  getReplies(ticketId: number): any[] {
    return this.replies.filter((reply) => reply.ticket_id === ticketId);
  }
    private setupDrawer(): void {
      this._breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
        if (result.matches) {
          this.drawer.mode = 'side';
        } else {
          this.drawer.mode = 'side';
        }
      });
    }
    onContentChange(event: any) {
      this.Detail = event;
    }
  
  }