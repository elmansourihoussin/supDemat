import { Component, OnInit } from '@angular/core';
import { single, single1, multi, single2 } from '@core/db/data';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent  {

  multi: any[];
  single: any[];
  viewLineChart: any[] = [800, 400];

  view: any[] = [700, 200];

  view1: any[] = [300, 200];

  view2: any[] = [990,150];

  single2: any[];
  single1: any[];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  // options
  legend: boolean = true;
 // showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Année';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  cardColor: string = '#232837';

  constructor() {
    Object.assign(this, { multi });
    Object.assign(this, { single });
    Object.assign(this, { single1 });
    Object.assign(this, { single2 });
   // this.view = [innerWidth / 1.3, 200];
    //this.viewLineChart= [innerWidth / 1.3, 250];
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  


}
