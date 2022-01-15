import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stanje } from 'src/app/models/Stanje/stanje.model';

const baseUrl = 'http://localhost:9191/stanje';

@Injectable({
  providedIn: 'root'
})
export class StanjeService {

  constructor(private http: HttpClient) { }

  vratiSve(): Observable<Stanje[]> {
    return this.http.get<Stanje[]>(`${baseUrl}/vratiSve`);
  }

  vratiStanja(rb: number): Observable<Stanje[]> {
    return this.http.get<Stanje[]>(`${baseUrl}/vratiStanja/${rb}`);
  }

  izmeni(stanje: Stanje): Observable<Stanje> {
    return this.http.put(`${baseUrl}/izmeni`, stanje);
  }

  obrisi(stanjeId: number, racunId: number): Observable<string> {
    return this.http.delete(`${baseUrl}/obrisi?stanjeId=${stanjeId}&racunId=${racunId}`, { responseType: 'text' });
  }
}
