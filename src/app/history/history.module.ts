import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history.component';
import { MaterialModule } from '../material.module';
import { HistoryService } from './history.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent]
})
export class HistoryModule { }
