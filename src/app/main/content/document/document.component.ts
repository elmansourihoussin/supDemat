import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  rows = [];

  temp = [];

  formdt: FormGroup;

  constructor(private documentService: DocumentService, private fb: FormBuilder) { 
    this.formdt = this.fb.group({
      dt_debut: '',
      dt_fin: ''
    })
  }

  ngOnInit() {
    this.documentService.getAlldocuments().subscribe((result: any) => {
      this.temp = [...result];
      this.rows = result;
      console.log('Listes > ', this.rows)
    })
  }

  envoyerdt() {
    this.documentService.getByDate(this.formdt.value).subscribe(res => {
      console.log('Bien envoyer !! ');
    })
    }


  updateFilter(event) {
    const val = event.target.value.toString().toLowerCase().trim();
    const filtered = this.temp.filter(d => {
      return (d.document_ID.toString().toLowerCase().indexOf(val) !== -1) || !val;
    });
    this.rows= filtered;

    // const val = event.target.value.toLowerCase();

    // // filter our data 
    // const temp = this.temp.filter(function(d) {
    //   return d.document_NOM_FIC.toLowerCase().indexOf(val) !== -1 || d.idoc_CNT_IDE.toLowerCase().indexOf(val) !== -1 || !val;
    // });

    // // update the rows
    // this.rows = temp;
    // Whenever the filter changes, always go back to the first page
  //  this.table.offset = 0;
  }




}
