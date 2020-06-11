import { NgModule } from '@angular/core';
import { FluxEntrantComponent } from './flux-entrant.component';
import { SharedModule } from '@core/modules/shared.module';



@NgModule({
  declarations: [FluxEntrantComponent],
  imports: [
    SharedModule
  ]
})
export class FluxEntrantModule { }
