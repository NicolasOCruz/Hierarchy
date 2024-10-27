import { Injectable, inject } from '@angular/core';
import { Level } from '../models/level.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private product!: Product;

  levelsStack: Level[] = [];
  static pathStack: string[] = [];

  private currentLevelSubject = new BehaviorSubject<Level | null>(null);
  currentLevel$ = this.currentLevelSubject.asObservable();

  private isProductListVisibleSubject = new BehaviorSubject<boolean>(true);
  isProductListVisible$ = this.isProductListVisibleSubject.asObservable();

  router = inject(Router);

  addPath(path: string) {
    if (path.trim()) {
      const currentRoute = NavigationService.pathStack[NavigationService.pathStack.length - 1] || '';
  
      const newRoute = `${currentRoute}/${path.trim()}`;

      NavigationService.pathStack.push(newRoute);

      console.log(NavigationService.pathStack);
    }
  }

  setProduct(product: any) {
    this.product = product;
    this.levelsStack = product.levels ? [product] : [];
    this.currentLevelSubject.next(product);
    this.isProductListVisibleSubject.next(false);
  }

  goToSublevel(sublevel: Level) {
    this.levelsStack.push(sublevel);
    this.currentLevelSubject.next(sublevel);
  }

  goBack() {
    if (NavigationService.pathStack.length > 1) {
      NavigationService.pathStack.pop();
    }

    if (this.levelsStack.length > 1) {
      this.levelsStack.pop();
      const previousLevel = this.levelsStack[this.levelsStack.length - 1];
      this.currentLevelSubject.next(previousLevel);
    } else {
      this.isProductListVisibleSubject.next(true);
    }
    console.log(NavigationService.pathStack);
  }

  showProductList() {
    this.isProductListVisibleSubject.next(true);
  }

  getProduct() {
    return this.product;
  }
}