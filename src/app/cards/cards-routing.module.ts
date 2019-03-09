import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CardsComponent } from './cards.component';

const routes: Routes =[
  {path:"cards", component:CardsComponent},
  {path:"cards/:query", component:CardsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
  ]
})
export class CardsRoutingModule { }
