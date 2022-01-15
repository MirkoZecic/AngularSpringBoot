import { Component, OnInit } from '@angular/core';
import { Racun } from 'src/app/models/Racun/racun.model';
import { Stanje } from 'src/app/models/Stanje/stanje.model';
import { RacunService } from 'src/app/services/RacunService/racun.service';
import { StanjeService } from 'src/app/services/StanjeService/stanje.service';

@Component({
  selector: 'app-dodaj-stanje',
  templateUrl: './dodaj-stanje.component.html',
  styleUrls: ['./dodaj-stanje.component.scss']
})
export class DodajStanjeComponent implements OnInit {

  racun: Racun = {
    rb: 0,
    brojRacuna: 0,
    tipRacuna: '',
    stanja: [],
    klijent: {}
  };

  trenutnoStanje: Stanje = {
    stanjeID: 0,
    iznosStanja: 0
  };

  tipoviRacuna: string[] = [];
  odabraniTip: string = 'default';

  onemogucenaForma: boolean = false;

  uspesnaPoruka: string = '';
  greska: string = '';

  constructor(private racunService: RacunService, private stanjeService: StanjeService) { }

  ngOnInit(): void {
    this.ucitajTipoveRacuna();
  }

  ucitajTipoveRacuna(): void {
    this.racunService.vratiTipoveRacuna().subscribe({
      next: (data) => {
        this.tipoviRacuna = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  pronadjiRacun(): void {
    if (!this.frontObrada())
      return;

    this.racunService.vratiJedan(this.racun.brojRacuna!, this.racun.tipRacuna!).subscribe({
      next: (data) => {
        this.racun = data;
        console.log(data);
        this.uspesnaPoruka = 'Uspesno postavljen racun!';
      },
      error: (e) => this.backObradaGreske(e)
    });
  }

  kreirajStanje(): void {
    this.racun.stanja!.push(JSON.parse(JSON.stringify(this.trenutnoStanje)));
  }


  potvrdiUnos(): void {
    this.racunService.postaviStanja(this.racun).subscribe({
      next: (data) => {
        this.racun = data;
        console.log(data);
        this.uspesnaPoruka = 'Uspesno uneta stanja!';
      },
      error: (e) => this.backObradaGreske(e)
    });
  }

  odustani(): void {
    this.stanjeService.vratiStanja(this.racun.rb!).subscribe({
      next: (data) => {
        this.racun.stanja = data;
        console.log(data);
      },
      error: (e) => this.backObradaGreske(e)
    });
  }

  frontObrada(): boolean {
    this.greska = '';

    if (!Number.isSafeInteger(this.racun.brojRacuna)) {
      this.greska = "KorisnikID mora biti u opsegu integer vrednosti!";
    }

    if (this.racun.tipRacuna == '') {
      this.greska += "\nMorate odabrati tip racuna!";
    }

    return this.greska == '';
  }

  backObradaGreske(e: any): void {
    console.log(e);
    if (e.error.message)
      this.greska = e.error.message;
    else if (e.error.errorMessage)
      this.greska = e.error.errorMessage;
    else {
      this.greska = "Neocekivana greska";
    }
  }

  zatvoriAlert(tip: string): void {
    if (tip == 'uspesno')
      this.uspesnaPoruka = '';
    else if (tip == 'neuspesno')
      this.greska = '';
  }


}
