import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialModule { }
