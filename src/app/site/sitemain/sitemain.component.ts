import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sitemain',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatSidenavModule,
    RouterOutlet
],
  templateUrl: './sitemain.component.html',
  styleUrl: './sitemain.component.scss'
})
export class SitemainComponent {

}
