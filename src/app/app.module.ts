import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ItemsComponent } from './courses/items/items.component';
import { DetailsComponent } from './courses/details/details.component';
import { ListComponent } from './courses/list/list.component';
import { TdformComponent } from './courses/tdform/tdform.component';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ItemsComponent,
    DetailsComponent,
    ListComponent,
    TdformComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
