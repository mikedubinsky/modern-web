import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    ShareRoutingModule,
    NgMaterialModule
  ]
})
export class ShareModule { }
