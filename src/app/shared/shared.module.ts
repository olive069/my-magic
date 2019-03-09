import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule
  ],
})
export class SharedModule { }
