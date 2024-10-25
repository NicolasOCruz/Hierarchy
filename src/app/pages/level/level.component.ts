import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Level } from '../../shared/models/level.model';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {

  @Input('level') level!: Level;

  @Output('onSelect') onSelect = new EventEmitter<any>();

  searchLevel(level: Level) {
    this.onSelect.emit(level);
  }

}
