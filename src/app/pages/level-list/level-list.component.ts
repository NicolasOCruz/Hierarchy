import { Component, Input, OnInit, inject } from '@angular/core';
import { Level } from '../../shared/models/level.model';
import { FileComponent } from '../file/file.component';
import { LevelComponent } from '../level/level.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SanitizeRouteService } from '../../shared/services/sanitize-route.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-level-list',
  standalone: true,
  imports: [FileComponent, LevelComponent, CommonModule],
  templateUrl: './level-list.component.html',
  styleUrl: './level-list.component.css'
})
export class LevelListComponent implements OnInit {

  @Input('title') title?: string | null;

  navigationService = inject(NavigationService);
  selectedLevel!: Product | Level | null;

  router = inject(Router);
  activateRoute = inject(ActivatedRoute);
  pathSegments: string[] = [];

  ngOnInit(): void {
    this.navigationService.currentLevel$.subscribe(level => {
      if (level) {
        const sanitizedLevel = SanitizeRouteService.sanitize(level.name);
        console.log(sanitizedLevel)
      }
      this.selectedLevel = level;
    });
  }

  hasLevels(level: Level) : boolean {
    return level.levels ? level.levels?.length > 0 : false;
  }

  hasFiles(level: Level) : boolean {
    return level?.files ? level.files.length > 0 : false;
  }

  goToSublevel(sublevel: Level) {
    this.navigationService.goToSublevel(sublevel);
  }

  goBack() {
    this.navigationService.goBack();
  }

  hasPreviousLevel(): boolean {
    return this.navigationService.levelsStack.length > 1;
  }

  showProductList() {
    this.navigationService.showProductList();
  }
}
