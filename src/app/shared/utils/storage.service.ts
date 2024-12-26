import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Lưu dữ liệu
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Lấy dữ liệu
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // Xóa dữ liệu
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Xóa tất cả
  clear(): void {
    localStorage.clear();
  }
}
