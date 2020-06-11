import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainModule } from './main/main.module';
import { SharedModule } from '@core/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MainModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
