import { NgModule } from '@angular/core';
import { ContentModule } from './content/content.module';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '@core/modules/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    SharedModule,
    ContentModule
  ]
})
export class MainModule { }
