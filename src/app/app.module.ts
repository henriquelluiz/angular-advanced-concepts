import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './todo/features/login/login.module';
import { ContentARootComponent } from './pages/content-a/components/containers/content-a-root/content-a-root.component';
import { ContentAChildComponent } from './pages/content-a/components/content-a-child/content-a-child.component';
import { ContentAService } from './pages/content-a/services/content-a.service';
import { ContentBChildComponent } from './pages/content-b/components/content-b-child/content-b-child.component';
import { ContentBRootComponent } from './pages/content-b/components/containers/content-b-root/content-b-root.component';
import { JsonPlaceholderService } from './shared/services/json-placeholder.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';

import { reducer } from '../app/state/app.reducer';
import { AppEffects } from '../app/state/app.effects';


@NgModule({
  declarations: [
    AppComponent,
    ContentARootComponent,
    ContentAChildComponent,
    ContentBChildComponent,
    ContentBRootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    StoreModule.forRoot({ userContext: reducer }),
    EffectsModule.forRoot([ AppEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    ContentAService,
    JsonPlaceholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
