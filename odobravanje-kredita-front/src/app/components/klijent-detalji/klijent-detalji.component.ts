import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Klijent } from 'src/app/models/Klijent/klijent.model';

@Component({
  selector: '[app-klijent-detalji]',
  templateUrl: './klijent-detalji.component.html',
  styleUrls: ['./klijent-detalji.component.scss']
})
export class KlijentDetaljiComponent implements OnInit {


  @Input() trenutniKlijent: Klijent = {};
  @Input() brojRacuna: string = '';
  @Output() izmeniKlijentaEvent = new EventEmitter<Klijent>();

  constructor() { }


  ngOnInit(): void {

  }

  izmeniOvogKlijenta(): void {
    this.izmeniKlijentaEvent.emit(this.trenutniKlijent);
  }

}