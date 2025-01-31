import { RenderMode, ServerRoute } from '@angular/ssr';
import { BaivietsService } from './admin/listbaiviet/listbaiviet.service';
import { inject } from '@angular/core';
import { UsersService } from './admin/adminmain/listuser/listuser.services';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'admin/users/:id',
    renderMode: RenderMode.Server,
    async getPrerenderParams() {
      const _UsersService = inject(UsersService);
      const ids = await _UsersService.getUsers(); // Assuming this returns ['1', '2', '3']
      return ids.map((id:any) => ({ id })); // Transforms IDs into an array of objects for prerendering
      // This will prerender the paths: `/post/1`, `/post/2` and `/post/3`
    },
  },
];
