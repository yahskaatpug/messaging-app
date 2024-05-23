import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../components/constants';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private apiUrl = API_URL;

  sendTextMessage(phoneNumber:string, message:string): Observable<any>{
   return this.http.post(`${this.apiUrl}/send-text-message`, {phoneNumber, message});

  }

  sendWhatsAppMessage(phoneNumber:string, message:string): Observable<any>{
   return this.http.post(`${this.apiUrl}/send-whatsapp-message`, {phoneNumber, message});

  }

  sendPersonalisedWhatsAppMsg(phoneNumber:string, message:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/send-personalised-whatsapp-message`, {phoneNumber, message});
 
   }

}
