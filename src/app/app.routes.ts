import { Routes } from '@angular/router';
import { HierarchyComponent } from './pages/hierarchy/hierarchy.component';
import { AppComponent } from './app.component';
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
        component: HierarchyComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
