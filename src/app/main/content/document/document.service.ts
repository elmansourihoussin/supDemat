import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

private  apiUrl: string;

  constructor(private _http: HttpClient) {
    this.apiUrl = 'http://' + environment.settings.backend;
  }


  getAlldocuments() {
    console.log(`apiUrl => ${this.apiUrl}/getAll`);
    return this._http.get(`${this.apiUrl}/getAll`);
    }


    getByDate(data) {
      console.log('Date ', data.dt_debut)
      return this._http.post('http://localhost:8080/getbyDate', {
        document_DATE_ENREG: '2017-01-11T11:53:15.000+0000'
      }, {
        headers: new HttpHeaders()
                    .set('Content-Type', 'application/json; charset=utf-8')
      });
    }

}
