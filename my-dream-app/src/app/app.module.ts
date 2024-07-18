import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hello', component: HelloWorldComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration(),
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
