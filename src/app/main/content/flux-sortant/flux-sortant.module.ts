import { NgModule } from '@angular/core';
import { FluxSortantComponent } from './flux-sortant.component';
import { SharedModule } from '@core/modules/shared.module';



@NgModule({
  declarations: [FluxSortantComponent],
  imports: [
    SharedModule
  ]
})
export class FluxSortantModule { }
