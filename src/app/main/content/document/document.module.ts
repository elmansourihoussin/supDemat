import { NgModule } from '@angular/core';
import { DocumentComponent } from './document.component';
import { SharedModule } from '@core/modules/shared.module';



@NgModule({
  declarations: [DocumentComponent],
  imports: [
    SharedModule
  ]
})
export class DocumentModule { }
