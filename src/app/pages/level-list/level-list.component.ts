import { Component, Input, OnInit } from '@angular/core';
import { Level } from '../../shared/models/level.model';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'app-level-list',
  standalone: true,
  imports: [FileComponent],
  templateUrl: './level-list.component.html',
  styleUrl: './level-list.component.css'
})
export class LevelListComponent implements OnInit {

  @Input('levels') levels?: Level[] | null;
  @Input('title') title?: string | null;

  selectedLevel!: Level | null;

  ngOnInit(): void {
  }

  searchLevel(level: Level) {
    console.log(level)
    this.selectedLevel = level;
    this.title = level.name;
  }

  goBack() {
    this.selectedLevel = null;
    this.title = null;
  }

  hasLevels(level: Level) : boolean {
    return level.sublevels ? level.sublevels?.length > 0 : false;
  }

  hasFiles(level: Level) : boolean {
    return level?.files ? level.files.length > 0 : false;
  }
}
