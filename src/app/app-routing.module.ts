import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { ContentBRootComponent } from './pages/content-b/components/containers/content-b-root/content-b-root.component';

const routes: Routes = [
  {path: 'content-a', component: ContentARootComponent, title: 'Content A ― User'},
  {path: 'content-b', component: ContentBRootComponent, title: 'Content B ― Counter'},
  {path: '', redirectTo: 'content-a', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
