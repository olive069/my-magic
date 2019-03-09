import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CardsModule
    
    
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
