import { Component, OnInit } from '@angular/core';
import { single } from '@core/db/data';

@Component({
  selector: 'app-header-accueil',
  templateUrl: './header-accueil.component.html',
  styleUrls: ['./header-accueil.component.scss']
})
export class HeaderAccueilComponent implements OnInit {
  single: any[];
  view: any[] = [700, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
    this.view = [innerWidth / 1.3, 300];
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

  //onResize(event) { this.view = [event.target.innerWidth - 900, 280 ]; }
  
  ngOnInit() {
  }

}
