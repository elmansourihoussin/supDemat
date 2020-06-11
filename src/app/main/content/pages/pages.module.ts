import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { SharedModule } from '@core/modules/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', component: PageComponent }
]


@NgModule({
  declarations: [PageComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot(routers)
  ]
})
export class PagesModule { }
