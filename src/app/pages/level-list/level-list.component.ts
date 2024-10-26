import { Component, Input, OnInit, inject } from '@angular/core';
import { Level } from '../../shared/models/level.model';
import { FileComponent } from '../file/file.component';
import { LevelComponent } from '../level/level.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SanitizeRouteService } from '../../shared/services/sanitize-route.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-level-list',
  standalone: true,
  imports: [FileComponent, LevelComponent],
  templateUrl: './level-list.component.html',
  styleUrl: './level-list.component.css'
})
export class LevelListComponent implements OnInit {

  @Input('levels') levels?: Level[] | null;
  @Input('title') title?: string | null;

  navigationService = inject(NavigationService);
  selectedLevel!: Level | null;

  router = inject(Router);
  activateRoute = inject(ActivatedRoute);
  pathSegments: string[] = [];

  ngOnInit(): void {
    NavigationService.selectedLevel.subscribe(res => {
      console.log(res)
    })
    NavigationService.title.subscribe(res => {
      this.title = res;
    })
  }

  searchLevel(level: Level) {
    this.selectedLevel = level;
    this.title = level.name;
    const sanitizedLevel = SanitizeRouteService.sanitize(level.name);
    this.navigationService.addPath(sanitizedLevel, level, level.name);
  }

  hasLevels(level: Level) : boolean {
    return level.sublevels ? level.sublevels?.length > 0 : false;
  }

  hasFiles(level: Level) : boolean {
    return level?.files ? level.files.length > 0 : false;
  }
}
