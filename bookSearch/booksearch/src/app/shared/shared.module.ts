import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscriptionManagePipe } from './discription-manage.pipe';



@NgModule({
  declarations: [
    DiscriptionManagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
