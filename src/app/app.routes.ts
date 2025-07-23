import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'especialidades',
    loadComponent: () => import('./especialidades/especialidades.page').then(m => m.EspecialidadesPage)
  },
  {
    path: 'piso',
    loadComponent: () => import('./piso/piso.page').then(m => m.PisoPage)
  },
  {
    path: 'muro',
    loadComponent: () => import('./muro/muro.page').then(m => m.MuroPage)
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./sobre-nosotros/sobre-nosotros.page').then(m => m.SobreNosotrosPage)
  }
];


