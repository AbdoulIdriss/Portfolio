import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealisationService {

  constructor( private http:HttpClient) { }

  private backendUrl = 'http://127.0.0.1:5000/realisation'

  getAllRealisations():Observable<any>{
    return this.http.get<any>(this.backendUrl + '/')
  }

}
