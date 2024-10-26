import { Injectable, inject } from '@angular/core';
import { Level } from '../models/level.model';
import { ActivatedRoute, Router } from '@angular/router';

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

  addPath(path: string, level: unknown, title: string) {
    if (path.trim()) {
      const currentRoute = this.router.url;
      const newRoute = `${currentRoute}/${path.trim()}`;
      
      NavigationService.pathStack.push(newRoute);
      NavigationService.levelStack.set(newRoute, level);
      NavigationService.titleStack.set(newRoute, title);
      
      this.router.navigate([newRoute], { relativeTo: this.activatedRoute });

    }
  }

  goBack() : any {
    if (NavigationService.pathStack.length > 0) {
      console.log("entrou no if")
      const popRoute = NavigationService.pathStack.pop();

      if (popRoute) {
        NavigationService.levelStack.delete(popRoute);
        const selectedLevel = NavigationService.levelStack.get(NavigationService.pathStack[NavigationService.pathStack.length - 1]);
        const title = NavigationService.titleStack.get(NavigationService.pathStack[NavigationService.pathStack.length - 1]);
        
        return {
          level: selectedLevel,
          title: title,
          route: NavigationService.pathStack[NavigationService.pathStack.length - 1]
        }
      }
    }

    console.log("NÃO entrou no if")

    return {
      level: '',
      title: '',
      route: '/home'
    }
  }
}
