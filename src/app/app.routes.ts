import { Routes,Router } from '@angular/router';
export const routes: Routes = [
    { path: '', redirectTo: 'qrcode', pathMatch: 'full' },
    {
      path: '404',
      loadComponent: () => import('./site/notfound/notfound.component').then((c) => c.NotfoundComponent),
    },
    {
      path: 'qrcode',
      loadComponent: () => import('./site/qrcode/qrcode.component').then((c) => c.qrcodeComponent),
    },
  ];
