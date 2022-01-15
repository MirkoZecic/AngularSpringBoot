import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Klijent } from '../../models/Klijent/klijent.model';

const baseUrl = 'http://localhost:9191/klijent';

@Injectable({
  providedIn: 'root'
})
export class KlijentService {

  constructor(private http: HttpClient) { }

  vratiSve(): Observable<Klijent[]> {
    return this.http.get<Klijent[]>(`${baseUrl}/vratiSve`);
  }

  vratiJedan(id: number): Observable<Klijent> {
    return this.http.get(`${baseUrl}/vratiJedan/${id}`);
  }

  dodaj(klijent: Klijent): Observable<Klijent> {
    return this.http.post(`${baseUrl}/dodaj`, klijent);
  }

  izmeni(id: number, klijent: Klijent): Observable<any> {
    return this.http.put(`${baseUrl}/izmeni/${id}`, klijent);
  }

}
