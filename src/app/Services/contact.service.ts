import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl = 'https://pythonportfolio.netlify.app/contact'

  constructor( private http: HttpClient ) { }

  create(contact:{ fullname: string; email: string; message: string }): Observable<any> {
    return this.http.post<any>(this.backendUrl + '/create' , contact , {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
