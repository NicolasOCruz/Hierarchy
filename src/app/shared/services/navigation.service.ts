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

  private currentLevelSubject = new BehaviorSubject<Level | null>(null);
  currentLevel$ = this.currentLevelSubject.asObservable();

  private isProductListVisibleSubject = new BehaviorSubject<boolean>(true);
  isProductListVisible$ = this.isProductListVisibleSubject.asObservable();

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
    if (this.levelsStack.length > 1) {
      this.levelsStack.pop();
      const previousLevel = this.levelsStack[this.levelsStack.length - 1];
      this.currentLevelSubject.next(previousLevel);
    } else {
      this.isProductListVisibleSubject.next(true);
    }
  }

  // Retorna a lista de produtos
  showProductList() {
    this.isProductListVisibleSubject.next(true);
  }

  // Retorna o produto atual (se necessário em outros componentes)
  getProduct() {
    return this.product;
  }
}