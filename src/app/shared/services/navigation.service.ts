import { Injectable } from '@angular/core';
import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  selectedLevel?: Level[] = [];

  goBack() : void {

  }

  goAhead() : void {

  }
}
