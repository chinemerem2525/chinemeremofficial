import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../model/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

 private apiUrl = 'https://portfolio-server-0oro.onrender.com/api/contact';


  constructor(private http: HttpClient) { }

  saveDetails(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

}
