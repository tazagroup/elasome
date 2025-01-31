import { Routes,Router } from '@angular/router';
import { GuestGuard } from './shared/users/guards/guest.guard';
import { AuthGuard } from './shared/users/guards/auth.guard';
import { DynamicComponentResolver } from './dynamic-component.resolver';
export const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
        {
          path: 'sanpham',
          loadComponent: () => import('./admin/listsanpham/listsanpham.component').then((c) => c.ListsanphamComponent),
          children: [
            {
              path: ':id',
              loadComponent: () => import('./admin/listsanpham/detailsanpham/detailsanpham.component').then((c) => c.DetailSanphamComponent),
            },
          ],
        },
        {
          path: 'profile',
          loadComponent: () => import('./shared/users/profile/profile.component').then((c) => c.ProfileComponent),
          children:[
            {
              path: 'socialpage',
              loadComponent: () => import('./shared/users/profile/social/social.component').then((c) => c.SocialComponent),
            },
          ]
        },
        {
          path: 'account',
          redirectTo: 'account/general', // Chuyển hướng đến 'account/password'
          pathMatch: 'full', // Xác định khớp chính xác
        },
        {
          path: 'account',
          loadComponent: () => import('./shared/users/account/account.component').then((c) => c.AccountComponent),
          children:[
            {
              path: 'password',
              loadComponent: () => import('./shared/users/account/password/password.component').then((c) => c.PasswordComponent),
            },
            {
              path:'general',
              loadComponent: () => import('./shared/users/account/general/general.component').then((c) => c.GeneralComponent),
            }
          ]
        },
      ],
    },
    {
      path: 'login',
      canActivate: [GuestGuard],
      canActivateChild: [GuestGuard],
      loadComponent: () => import('./shared/users/login/login.component').then((c) => c.LoginComponent),
    },
    {
      path: 'register',
      loadComponent: () => import('./shared/users/register/register.component').then((c) => c.RegisterComponent),
    },
    {
      path: '',
      loadComponent: () =>import('./site/sitemain/sitemain.component').then((c) => c.SitemainComponent),
      children: [
        {
          path: '',
          loadComponent: () =>import('./site/home/home.component').then((c) => c.HomeComponent),
        },
        {
          path: 'lien-he',
          loadComponent: () =>import('./site/lienhe/lienhe.component').then((c) => c.LienheComponent),
        },
        {
          path: ':slug',
          resolve: { componentType: DynamicComponentResolver },
          loadComponent: async () => {
            const componentType = history?.state?.componentType; 
            if(componentType)
            {
              switch (componentType) {
                case 'danhmucbaiviet':
                  const c = await import('./site/danhmucbaiviet/danhmucbaiviet.component');
                  return c.DanhmucbaivietComponent;
                case 'baiviet':
                  const c_1 = await import('./site/baiviet/baiviet.component');
                  return c_1.BaivietComponent;
                case 'danhmuc':
                  const c_2 = await import('./site/danhmuc/danhmuc.component');
                  return c_2.DanhmucComponent;
                case 'sanpham':
                  const c_3 = await import('./site/sanpham/sanpham.component');
                  return c_3.SanphamComponent;
                case 'danhmucgioithieu':
                  const c_5 = await import('./site/danhmucgioithieu/danhmucgioithieu.component');
                  return c_5.DanhmucgioithieuComponent;
                case 'gioithieu':
                  const c_6 = await import('./site/gioithieu/gioithieu.component');
                  return c_6.GioithieuComponent;
                default:
                  const c_4 = await import('./site/notfound/notfound.component');
                  return c_4.NotfoundComponent; // Component mặc định
              }
            }
            else {
             return import('./site/home/home.component').then((c) => c.HomeComponent)
            }
          },
        },
      ],
    },
  ];
