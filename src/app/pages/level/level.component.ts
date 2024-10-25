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

  @Input('level') level!: Level | null;
  @Input('title') title!: string | null;

  selectedLevel!: Level | null;

  ngOnInit(): void {
  }

  searchLevel(level: Level) {
    this.selectedLevel = level;
    this.title = level.name;
  }

  goBack() {
    this.selectedLevel = null;
    this.title = null;
  }

  hasFiles() : boolean {
    return this.level?.files ? this.level.files.length > 0 : false;
  }
}
