import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '@core/modules/shared.module';
import { AccueilModule } from './accueil/accueil.module';
import { DocumentModule } from './document/document.module';
import { PagesModule } from './pages/pages.module';
import { FluxSortantModule } from './flux-sortant/flux-sortant.module';
import { FluxEntrantModule } from './flux-entrant/flux-entrant.module';
import { M3dModule } from './m3d/m3d.module';



@NgModule({
  declarations: [ContentComponent],
  exports: [ ContentComponent ],
  imports: [
    SharedModule,
    AccueilModule,
    DocumentModule,
    PagesModule,
    FluxSortantModule,
    FluxEntrantModule,
    M3dModule
    ]
})
export class ContentModule { }
