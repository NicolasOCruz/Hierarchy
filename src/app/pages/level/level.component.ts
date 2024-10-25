import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Level } from '../../shared/models/level.model';
import { FileComponent } from "../file/file.component";

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [FileComponent],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent implements OnInit {

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
