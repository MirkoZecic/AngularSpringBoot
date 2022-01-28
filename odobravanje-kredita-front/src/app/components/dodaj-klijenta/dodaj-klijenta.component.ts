import { Component, OnInit } from '@angular/core';
import { Klijent } from 'src/app/models/Klijent/klijent.model';
import { Racun } from 'src/app/models/Racun/racun.model';
import { KlijentService } from 'src/app/services/KlijentService/klijent.service';
import { RacunService } from 'src/app/services/RacunService/racun.service';

@Component({
  selector: 'app-dodaj-klijenta',
  templateUrl: './dodaj-klijenta.component.html',
  styleUrls: ['./dodaj-klijenta.component.scss']
})
export class DodajKlijentaComponent implements OnInit {

  klijent: Klijent = {
    imeIPrezime: '',
    pib: '',
    adresaISediste: '',
  }

  racuni: Racun[] = [];
  odabraniRacunID: number = -1;
  onemogucenaForma: boolean = false;

  uspesnaPoruka: string = '';
  greska: string = '';

  constructor(private klijentService: KlijentService, private racunService: RacunService) { }

  ngOnInit(): void {
    this.ucitajRacune();
  }

  ucitajRacune(): void {
    this.racunService.vratiSveSlobodne().subscribe({
      next: (data) => {
        this.racuni = data
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  postaviKlijentaNaRacunu(): void {
    this.racunService.postaviKlijentaNaRacunu(this.racuni.find(rac => rac.rb == this.odabraniRacunID)!).subscribe({
      next: (data) => {
        console.log(data);
        this.uspesnaPoruka = 'Uspesno ste postavili klijenta na racun';
      },
      error: (e) => console.error(e)
    });

    this.onemogucenaForma = false;
    this.ocistiFormu();
  }

  frontObrada(): boolean {
    this.greska = '';

    if (this.odabraniRacunID == -1) {
      this.greska = "Morate odabrati racun!";
    }

    if (!Number.isSafeInteger(this.klijent.klijentID)) {
      this.greska += "\nKorisnikID mora biti u opsegu integer vrednosti!";
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

  dodajKlijenta(): void {
    if (!this.frontObrada()) {
      return;
    }

    this.klijentService.dodaj(this.klijent).subscribe({
      next: (res) => {
        console.log(res);
        this.uspesnaPoruka = 'Uspesno ste dodali klijenta!';

        (this.racuni.find(rac => rac.rb == this.odabraniRacunID) as any).klijent = res;
        this.onemogucenaForma = true;
      },
      error: (e) => {
        this.backObradaGreske(e);
      }
    });
  }

  ocistiFormu(): void {
    this.klijent = {
      imeIPrezime: '',
      pib: '',
      adresaISediste: '',
    };
  }

  zatvoriAlert(tip: string): void {
    if (tip == 'uspesno')
      this.uspesnaPoruka = '';
    else if (tip == 'neuspesno')
      this.greska = '';
  }
}
