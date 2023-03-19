import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private formUrl = 'https://formspree.io/f/xdovnpqp';
  private headers = new HttpHeaders({'content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  sendEmail(mail: any):Observable<any>{
    return this.http.post<any>(this.formUrl, mail, { headers: this.headers });
  }
}
