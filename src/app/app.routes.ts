import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LevelListComponent } from './pages/level-list/level-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ProductListComponent
    },
    {
        path: 'level',
        component: LevelListComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
