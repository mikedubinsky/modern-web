import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'wakelock', loadChildren: () => import('./wake-lock/wake-lock.module').then(m => m.WakeLockModule) },
  { path: 'visibility', loadChildren: () => import('./visibility/visibility.module').then(m => m.VisibilityModule) },
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }