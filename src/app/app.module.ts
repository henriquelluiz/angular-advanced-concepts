import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { ContentAChildComponent } from './pages/content-a/components/content-a-child/content-a-child.component';
import { ContentAService } from './pages/services/content-a.service';



@NgModule({
  declarations: [
    AppComponent,
    ContentARootComponent,
    ContentAChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentAService],
  bootstrap: [AppComponent]
})
export class AppModule { }
