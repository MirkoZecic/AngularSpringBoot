import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Racun } from 'src/app/models/Racun/racun.model';

const baseUrl = 'http://localhost:9191/racun';

@Injectable({
  providedIn: 'root'
})
export class RacunService {

  constructor(private http: HttpClient) { }

  vratiSve(): Observable<Racun[]> {
    return this.http.get<Racun[]>(`${baseUrl}/vratiSve`);
  }

  vratiJedan(brojRacuna: number, tipRacuna: string): Observable<Racun> {
    return this.http.get(`${baseUrl}/vratiJedan?broj=${brojRacuna}&tip=${tipRacuna}`);
  }

  vratiTipoveRacuna(): Observable<string[]> {
    return this.http.get<string[]>(`${baseUrl}/vratiTipoveRacuna`);
  }

  vratiKlijentovRacun(id: number): Observable<Racun> {
    return this.http.get(`${baseUrl}/vratiKlijentovRacun/${id}`);
  }

  postaviKlijentaNaRacunu(racun: Racun): Observable<Racun> {
    return this.http.put(`${baseUrl}/postaviKlijentaNaRacunu`, racun);
  }

  postaviStanja(racun: Racun): Observable<Racun> {
    return this.http.put(`${baseUrl}/postaviStanja`, racun);
  }

}
