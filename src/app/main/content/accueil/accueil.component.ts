import { Component, OnInit } from '@angular/core';
import { single, single1, multi, single2 } from '@core/db/data';
import { supDAnimations } from '@core/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: supDAnimations
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


  detailsFlux: any[];
  selectedItem;

  items = [ 
    {
     name: 'pa1_u0011_vir_aaaammjj.dat',
     nombre: 30,
     details: {
       dateEnvoi : '02/02/2019',
       dateReception: '03/04/2020',
       dateImrome: '05/04/2020',
       dateExpedie: '22/03/2020',
       dateTraite: '12/11/2019',
       recus: 30,
       imprimes: 15,
       expedies: 5,
       traites: 10,
       notyif_OK: 'OK'
     }
    }, {
      name: 'pa1_u0016_vir_pres_aaaammjj.dat',
      nombre: 24,
     details: {
       dateEnvoi : '12/02/2019',
       dateReception: '03/04/2020',
       dateImrome: '05/04/2020',
       dateExpedie: '22/03/2020',
       dateTraite: '12/11/2019',
       recus: 24,
       imprimes: 10,
       expedies: 5,
       traites: 9,
       notyif_OK: 'KO'
     }
    }, {
      name: 'pa1_u0011_vir_aaaammjj.dat',
      nombre: 50,
     details: {
       dateEnvoi : '13/02/2020',
       dateReception: '03/04/2020',
       dateImrome: '05/04/2020',
       dateExpedie: '22/03/2020',
       dateTraite: '12/11/2019',
       recus: 50,
       imprimes: 15,
       expedies: 12,
       traites: 28,
       notyif_OK: 'OK'
     }
    }, {
      name: 'pa1_u0011_vir_aaaammjj.dat',
      nombre: 60,
     details: {
       dateEnvoi : '01/02/2020',
       dateReception: '03/04/2020',
       dateImrome: '05/04/2020',
       dateExpedie: '25/02/2020',
       dateTraite: '12/01/2020',
       recus: 30,
       imprimes: 15,
       expedies: 30,
       traites: 15,
       notyif_OK: 'KO'
     }
    }, {
      name: 'pa1_u0016_vir_pres_aaaammjj.dat',
      nombre: 24,
     details: {
       dateEnvoi : '12/02/2019',
       dateReception: '03/04/2020',
       dateImrome: '05/04/2020',
       dateExpedie: '22/03/2020',
       dateTraite: '12/11/2019',
       recus: 24,
       imprimes: 10,
       expedies: 5,
       traites: 9,
       notyif_OK: 'KO'
     }
    }, {
      name: 'pa1_u0011_vir_aaaammjj.dat',
      nombre: 50,
     details: {
       dateEnvoi : '13/02/2020',
       dateReception: '03/04/2020',
       dateImrome: '05/04/2020',
       dateExpedie: '22/03/2020',
       dateTraite: '12/11/2019',
       recus: 50,
       imprimes: 15,
       expedies: 12,
       traites: 28,
       notyif_OK: 'OK'
     }
    },{
      name: 'pa1_u0011_vir_aaaammjj.dat',
      nombre: 30,
      details: {
        dateEnvoi : '02/02/2019',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '22/03/2020',
        dateTraite: '12/11/2019',
        recus: 30,
        imprimes: 15,
        expedies: 5,
        traites: 10,
        notyif_OK: 'OK'
      }
     }, {
       name: 'pa1_u0016_vir_pres_aaaammjj.dat',
       nombre: 24,
      details: {
        dateEnvoi : '12/02/2019',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '22/03/2020',
        dateTraite: '12/11/2019',
        recus: 24,
        imprimes: 10,
        expedies: 5,
        traites: 9,
        notyif_OK: 'KO'
      }
     }, {
       name: 'pa1_u0011_vir_aaaammjj.dat',
       nombre: 50,
      details: {
        dateEnvoi : '13/02/2020',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '22/03/2020',
        dateTraite: '12/11/2019',
        recus: 50,
        imprimes: 15,
        expedies: 12,
        traites: 28,
        notyif_OK: 'OK'
      }
     }, {
       name: 'pa1_u0011_vir_aaaammjj.dat',
       nombre: 60,
      details: {
        dateEnvoi : '01/02/2020',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '25/02/2020',
        dateTraite: '12/01/2020',
        recus: 30,
        imprimes: 15,
        expedies: 30,
        traites: 15,
        notyif_OK: 'KO'
      }
     },{
      name: 'pa1_u0011_vir_aaaammjj.dat',
      nombre: 30,
      details: {
        dateEnvoi : '02/02/2019',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '22/03/2020',
        dateTraite: '12/11/2019',
        recus: 30,
        imprimes: 15,
        expedies: 5,
        traites: 10,
        notyif_OK: 'OK'
      }
     }, {
       name: 'pa1_u0016_vir_pres_aaaammjj.dat',
       nombre: 24,
      details: {
        dateEnvoi : '12/02/2019',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '22/03/2020',
        dateTraite: '12/11/2019',
        recus: 24,
        imprimes: 10,
        expedies: 5,
        traites: 9,
        notyif_OK: 'KO'
      }
     }, {
       name: 'pa1_u0011_vir_aaaammjj.dat',
       nombre: 50,
      details: {
        dateEnvoi : '13/02/2020',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '22/03/2020',
        dateTraite: '12/11/2019',
        recus: 50,
        imprimes: 15,
        expedies: 12,
        traites: 28,
        notyif_OK: 'OK'
      }
     }, {
       name: 'pa1_u0011_vir_aaaammjj.dat',
       nombre: 60,
      details: {
        dateEnvoi : '01/02/2020',
        dateReception: '03/04/2020',
        dateImrome: '05/04/2020',
        dateExpedie: '25/02/2020',
        dateTraite: '12/01/2020',
        recus: 30,
        imprimes: 15,
        expedies: 30,
        traites: 15,
        notyif_OK: 'KO'
      }
     }
];

selecteItem(item) {
  console.log('Log ' , item.details);
  this.selectedItem = item.details;
  this.detailsFlux = [
            {
              "name": "Traités",
              "value": item.details.traites
            },
            {
              "name": "Imprimés",
              "value": item.details.imprimes
            },
            {
              "name": "Expédiés",
              "value": item.details.expedies
            }
          ];
}

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

  showXAxis: boolean = true;
  showYAxis: boolean = true;


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  cardColor: string = '#232837';

  constructor() {
    Object.assign(this, { multi });
    Object.assign(this, { single });
    Object.assign(this, { single1 });
    Object.assign(this, { single2 });

    //Object.assign(this, { this.detailsFlux });
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
