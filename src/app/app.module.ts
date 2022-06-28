import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { ContentAChildComponent } from './pages/content-a/components/content-a-child/content-a-child.component';
import { ContentAService } from './pages/content-a/services/content-a.service';
import { ContentBChildComponent } from './pages/content-b/components/content-b-child/content-b-child.component';
import { ContentBRootComponent } from './pages/content-b/components/containers/content-b-root/content-b-root.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { LoginComponent } from './todo/features/containers/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentARootComponent,
    ContentAChildComponent,
    ContentBChildComponent,
    ContentBRootComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [ContentAService],
  bootstrap: [AppComponent]
})
export class AppModule { }
