import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routes} from './app.routes'
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
