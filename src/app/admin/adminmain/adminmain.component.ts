import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Config, folders, notes, TREE_DATA, User } from './adminmain';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeModule, MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-adminmain',
  imports: [
    MatTreeModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './adminmain.component.html',
  styleUrl: './adminmain.component.scss'
})
export class AdminmainComponent {
  showFiller = false;
  Config:any =Config
  User:any =User

  folders: any[] =  folders
  notes: any[] = notes

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: any) => node.expandable;
}
