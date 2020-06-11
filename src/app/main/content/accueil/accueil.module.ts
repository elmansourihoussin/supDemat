import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil.component';
import { SharedModule } from '@core/modules/shared.module';

import { Charts5Component } from './charts5/charts5.component';
import { HeaderAccueilComponent } from './header-accueil/header-accueil.component';
import { SidebarLeftAccueilComponent } from './sidebar-left-accueil/sidebar-left-accueil.component';
import { SidebarRightAccueilComponent } from './sidebar-right-accueil/sidebar-right-accueil.component';

@NgModule({
  declarations: [
    AccueilComponent,
    Charts5Component,
    HeaderAccueilComponent,
    SidebarLeftAccueilComponent,
    SidebarRightAccueilComponent
  ],
  imports: [
    SharedModule
    
  ]
})
export class AccueilModule { }
