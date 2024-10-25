import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Router } from '@angular/router';
import { Level } from '../../shared/models/level.model';
import { LevelComponent } from "../level/level.component";
import { FileComponent } from "../file/file.component";
import { LevelListComponent } from "../level-list/level-list.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [LevelComponent, FileComponent, LevelListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input('product') product!: Product | null;

  ngOnInit(): void {
  }

  hasFiles() : boolean {
    return this.product?.files ? this.product.files.length > 0 : false;
  }
}