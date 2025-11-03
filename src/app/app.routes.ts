import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // 1. AÑADIMOS ESTE BLOQUE:
    // Esta es ahora la ruta de inicio. Redirige a 'login'.
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    // 2. MODIFICAMOS ESTE BLOQUE:
    // Cambiamos path: '' por path: 'tabs'
    // Ahora, las pestañas vivirán en la ruta /tabs
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    // Estas rutas ya estaban bien gracias al generador
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'detalle-serie/:id', // <--- ¡AÑADIMOS EL PARÁMETRO DE ID!
    loadComponent: () => import('./detalle-serie/detalle-serie.page').then( m => m.DetalleSeriePage)
  },
];