import { Component, OnInit } from '@angular/core';
import { single } from '@core/db/data';

@Component({
  selector: 'app-charts5',
  templateUrl: './charts5.component.html',
  styleUrls: ['./charts5.component.scss']
})
export class Charts5Component implements OnInit {
  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
