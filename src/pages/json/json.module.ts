import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonComponent } from './json.component';
import { Keys } from '../../components';
import { JsonRoutingModule } from './json-routing.module';

@NgModule({
  declarations: [
    JsonComponent,
    Keys
  ],
  imports: [
    CommonModule,
    JsonRoutingModule
  ]
})
export class JsonModule { }
