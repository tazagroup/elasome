Step 1: Tạo Cấu trúc thư mục

src/app/e-commerce/
  |- cart/
  |- payment/
  |- order/
  |- services/

Step 2: Tạo Component Cart với Standalone

// src/app/e-commerce/cart/cart.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}

Step 3: Tạo Component Payment với Standalone

// src/app/e-commerce/payment/payment.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentInfo = {};

  submitPayment() {
    console.log('Payment Submitted:', this.paymentInfo);
  }
}

Step 4: Tạo Component Order với Standalone

// src/app/e-commerce/order/order.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders = [];

  constructor() {
    this.orders = [
      { id: 1, status: 'Processing' },
      { id: 2, status: 'Shipped' }
    ];
  }
}

Step 5: Tạo Services

// src/app/e-commerce/services/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = [];

  addToCart(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

// src/app/e-commerce/services/payment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  processPayment(details) {
    console.log('Processing Payment:', details);
  }
}

// src/app/e-commerce/services/order.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  placeOrder(order) {
    console.log('Order Placed:', order);
  }
}

Step 6: Định nghĩa Routes

import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';

export const ECommerceRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'order', component: OrderComponent }
];

Step 7: Tạo lệnh CLI

Thêm tập tin schematics.json:

{
  "$schema": "https://json.schemastore.org/angular-schematic",
  "schematics": {
    "ng-generate-ecommerce": {
      "factory": "./ecommerce/index",
      "schema": "./ecommerce/schema.json",
      "description": "Tạo module ECommerce với cart, payment, order"
    }
  }
}

Cấu hình schema.json:

{
  "$schema": "http://json-schema.org/schema",
  "id": "ng-add-schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Tên Module"
    }
  }
}

Chạy lệnh:
ng generate ng-generate-ecommerce
