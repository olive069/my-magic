import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatBadgeModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatGridListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule,
  MatProgressSpinnerModule,
  
  
  
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule
    
  ],
  exports :[
    MatButtonModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule
    
    
  ]
})
export class MaterialModule { }
