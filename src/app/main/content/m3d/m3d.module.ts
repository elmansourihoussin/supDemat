import { NgModule } from '@angular/core';
import { M3dComponent } from './m3d.component';
import { SharedModule } from '@core/modules/shared.module';



@NgModule({
  declarations: [M3dComponent],
  imports: [
    SharedModule
  ]
})
export class M3dModule { }
