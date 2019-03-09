import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';
import { CardsRoutingModule } from './cards-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypeListComponent } from './type-list/type-list.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    CardListComponent,
    HeaderComponent,
    TypeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    CardsComponent,
    CardListComponent
  ]
})
export class CardsModule { }
