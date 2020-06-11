import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './main/content/accueil/accueil.component';
import { DocumentComponent } from './main/content/document/document.component';
import { FluxSortantComponent } from './main/content/flux-sortant/flux-sortant.component';
import { FluxEntrantComponent } from './main/content/flux-entrant/flux-entrant.component';
import { M3dComponent } from './main/content/m3d/m3d.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'flux-sortant', component: FluxSortantComponent },
  { path: 'flux-entrant', component: FluxEntrantComponent },
  { path: 'm3d', component: M3dComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
