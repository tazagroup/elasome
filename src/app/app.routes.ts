import { Routes } from '@angular/router';
import { AuthGuard } from './shared/users/auth.guard';
export const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: '',
      loadComponent: () =>import('./site/sitemain/sitemain.component').then((c) => c.SitemainComponent),
      children: [
        {
          path: '',
          loadComponent: () =>import('./site/home/home.component').then((c) => c.HomeComponent),
        },
      ],
    },
    {
      path: 'admin',
      canActivate: [AuthGuard],
      loadComponent: () => import('./admin/adminmain/adminmain.component').then((c) => c.AdminmainComponent),
      children: [
        {
          path: 'users',
          loadComponent: () => import('./admin/adminmain/listuser/listuser.component').then((c) => c.ListuserComponent),
          children: [
            {
              path: ':id',
              loadComponent: () => import('./admin/adminmain/listuser/detailuser/detailuser.component').then((c) => c.DetailUserComponent),
            },
          ],
        },
        {
          path: 'danhmuc',
          loadComponent: () => import('./admin/listdanhmuc/listdanhmuc.component').then((c) => c.ListdanhmucComponent),
          children: [
            {
              path: ':id',
              loadComponent: () => import('./admin/listdanhmuc/detaildanhmuc/detaildanhmuc.component').then((c) => c.DetailDanhmucComponent),
            },
          ],
        },
        {
          path: 'baiviet',
          loadComponent: () => import('./admin/listbaiviet/listbaiviet.component').then((c) => c.ListbaivietComponent),
          children: [
            {
              path: ':id',
              loadComponent: () => import('./admin/listbaiviet/detailbaiviet/detailbaiviet.component').then((c) => c.DetailBaivietComponent),
            },
          ],
        },
      ],
    },
    {
      path: 'login',
      loadComponent: () => import('./shared/users/login/login.component').then((c) => c.LoginComponent),
    },
    {
      path: 'register',
      loadComponent: () => import('./shared/users/register/register.component').then((c) => c.RegisterComponent),
    },
  ];
