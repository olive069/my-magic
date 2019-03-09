import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import { DeckComponent } from '../deck/deck.component';


const routes: Routes = [
  { path: "bar", component: BarComponent },
  { path: "deck", component: DeckComponent },
  { path: "bar/:query", component: BarComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BarRoutingModule { }
