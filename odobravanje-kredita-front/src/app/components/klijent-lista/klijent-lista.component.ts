import { Component, OnInit } from '@angular/core';
import { Klijent } from 'src/app/models/Klijent/klijent.model';
import { KlijentService } from 'src/app/services/KlijentService/klijent.service';
import { RacunService } from 'src/app/services/RacunService/racun.service';

@Component({
  selector: 'app-klijent-lista',
  templateUrl: './klijent-lista.component.html',
  styleUrls: ['./klijent-lista.component.scss']
})
export class KlijentListaComponent implements OnInit {

  klijenti: Klijent[] = [];
  brojeviRacuna: string[] = [];

  uspesnaIzmena: boolean = false;

  constructor(private klijentService: KlijentService, private racunService: RacunService) { }

  ngOnInit(): void {
    this.ucitajKlijente();
  }

  ucitajKlijente(): void {
    this.klijentService.vratiSve().subscribe({
      next: (data) => {
        this.klijenti = data;
        console.log(data);
        this.ucitajRacune();
      },
      error: (e) => console.error(e)
    });
  }

  ucitajRacune(): void {
    this.klijenti.forEach(kl => {
      this.racunService.vratiKlijentovRacun(kl.klijentID!).subscribe(
        {
          next: (data) => {
            if (data)
              this.brojeviRacuna.push(String(data.brojRacuna!));
            else
              this.brojeviRacuna.push('');
            console.log(data);
          },
          error: (e) => console.error(e)
        }
      )
    });
  }

  izmeniKlijenta(klijent: Klijent) {
    this.klijentService.izmeni(klijent.klijentID!, klijent).subscribe({
      next: (data) => {
        this.klijenti.find(kl => kl.klijentID == klijent.klijentID) != klijent;
        this.uspesnaIzmena = true;
        console.log('izmenjen:', data);
      },
      error: (e) => console.error(e)
    });
  }

  zatvoriAlert(): void {
    this.uspesnaIzmena = false;
  }
}
