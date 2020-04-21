import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdformComponent } from './courses/tdform/tdform.component';
import { DetailsComponent } from './courses/details/details.component';


const routes: Routes = [
    {path:'courses',component:TdformComponent},
    {path:':id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
