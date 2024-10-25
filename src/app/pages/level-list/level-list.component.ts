import { Component, Input, OnInit } from '@angular/core';
import { Level } from '../../shared/models/level.model';
import { FileComponent } from '../file/file.component';
import { LevelComponent } from '../level/level.component';

@Component({
  selector: 'app-level-list',
  standalone: true,
  imports: [FileComponent, LevelComponent],
  templateUrl: './level-list.component.html',
  styleUrl: './level-list.component.css'
})
export class LevelListComponent implements OnInit {

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
