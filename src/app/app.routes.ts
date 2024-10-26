import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LevelListComponent } from './pages/level-list/level-list.component';

export const routes: Routes = [
    {
        path: 'home',
        component: ProductListComponent,
        children: [
          {
            path: '**', // Captura qualquer sub-rota em 'home'
            component: ProductListComponent, // ou o componente que quiser exibir nas sub-rotas
            pathMatch: 'prefix' 
          }
        ]
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
];
