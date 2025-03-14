import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl = 'http://127.0.0.1:5000/contact'

  constructor(  ) { }

  // create(contact:{ fullname: string; email: string; message: string }): Observable<any> {
  //   return this.http.post<any>(this.backendUrl + '/create' , contact , {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

}
