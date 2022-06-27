import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'content-a', component: ContentARootComponent, title: 'Content A ― Root'},
  {path: '', redirectTo: 'content-a', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
