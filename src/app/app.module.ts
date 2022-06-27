import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { ContentAChildComponent } from './pages/content-a/components/content-a-child/content-a-child.component';
import { ContentAService } from './pages/content-a/services/content-a.service';
import { ContentBChildComponent } from './pages/content-b/components/content-b-child/content-b-child.component';
import { ContentBRootComponent } from './pages/content-b/components/containers/content-b-root/content-b-root.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentARootComponent,
    ContentAChildComponent,
    ContentBChildComponent,
    ContentBRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentAService],
  bootstrap: [AppComponent]
})
export class AppModule { }
