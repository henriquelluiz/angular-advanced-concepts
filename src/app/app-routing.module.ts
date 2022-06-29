import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { ContentBRootComponent } from './pages/content-b/components/containers/content-b-root/content-b-root.component';
import { LoginComponent } from './todo/features/login/containers/login/login.component';

const routes: Routes = [
  {path: 'content-a', component: ContentARootComponent, title: 'Content A ― User'},
  {path: 'content-b', component: ContentBRootComponent, title: 'Content B ― Counter'},
  {
    path: 'dashboard',
    loadChildren: () => import('./todo/features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: 'login', component: LoginComponent, title: 'ToDo App ― Login'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
