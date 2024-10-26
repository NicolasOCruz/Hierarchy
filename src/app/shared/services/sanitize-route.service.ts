import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanitizeRouteService {

  constructor() { }

  static sanitize(route: string): string {
    return route
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/ç/g, 'c')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();     
  }
}
