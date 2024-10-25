import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Level } from '../../shared/models/level.model';

@Component({
  selector: 'app-hierarchy',
  standalone: true,
  imports: [],
  templateUrl: './hierarchy.component.html',
  styleUrl: './hierarchy.component.css'
})
export class HierarchyComponent implements OnInit {

  @Input('levels') levels?: Level[];
  @Input('title') title?: string;

  selectedLevel!: Level;

  ngOnInit(): void {
  }

  searchLevel(level: Level) {
    this.selectedLevel = level;
    this.title = level.name;
  }

}
