import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';



@NgModule({
  declarations: [ReverseStringPipe],
  imports: [
    CommonModule
  ],
  exports: [ReverseStringPipe]
})
export class SharedModule { }
