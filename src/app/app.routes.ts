import { Routes } from '@angular/router';
import { LevelComponent } from './pages/level/level.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ProductComponent
    },
    {
        path: 'level',
        component: LevelComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
