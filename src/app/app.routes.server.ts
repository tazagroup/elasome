import { RenderMode, ServerRoute } from '@angular/ssr';
import { BaivietsService } from './admin/listbaiviet/listbaiviet.service';
import { inject } from '@angular/core';
import { UsersService } from './admin/adminmain/listuser/listuser.services';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/users/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'admin/danhmuc/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'admin/baiviet/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'admin/sanpham/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: ':slug',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
