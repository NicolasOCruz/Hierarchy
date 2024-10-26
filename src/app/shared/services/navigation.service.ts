import { Injectable, inject } from '@angular/core';
import { Level } from '../models/level.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  static pathStack: string[] = [];

  static levelStack: Map<string, unknown> = new Map();

  static titleStack: Map<string, string> = new Map();

  static returnLevel: Subject<any> = new Subject();

  static returnTitle: Subject<any> = new Subject();

  static productListReturn: Subject<any> = new Subject();


  addPath(path: string, level: any, title: string) {
    if (path.trim()) {
      const currentRoute = this.router.url;
      const newRoute = `${currentRoute}/${path.trim()}`;

      NavigationService.pathStack.push(newRoute);
      NavigationService.levelStack.set(newRoute, level);
      NavigationService.titleStack.set(newRoute, title);

      this.getRoute(newRoute);
    }
  }

  getRoute(newRoute: string) {
    this.router.navigate([newRoute], { relativeTo: this.activatedRoute });
  }

  goBack(): void {
    if (NavigationService.pathStack.length > 0) {
      const popRoute = NavigationService.pathStack.pop();

      if (popRoute) {
        NavigationService.levelStack.delete(popRoute);
        NavigationService.titleStack.delete(popRoute);

        const selectedLevel = NavigationService.levelStack.get(NavigationService.pathStack[NavigationService.pathStack.length - 1]);
        const title = NavigationService.titleStack.get(NavigationService.pathStack[NavigationService.pathStack.length - 1]) || '';
        const route = NavigationService.pathStack[NavigationService.pathStack.length - 1];

        NavigationService.returnLevel.next({level: selectedLevel, firstRoute: !route});

        if (title) {
          NavigationService.returnTitle.next(title);
        }

        if (route) {
          this.router.navigate([route], { relativeTo: this.activatedRoute });
        } else {
          this.router.navigate(['/home'], { replaceUrl: true })
        }
      }
    }
  }
}
