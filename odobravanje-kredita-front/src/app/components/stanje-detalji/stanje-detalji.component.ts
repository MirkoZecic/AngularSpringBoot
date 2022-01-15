import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stanje } from 'src/app/models/Stanje/stanje.model';

@Component({
  selector: '[app-stanje-detalji]',
  templateUrl: './stanje-detalji.component.html',
  styleUrls: ['./stanje-detalji.component.scss']
})
export class StanjeDetaljiComponent implements OnInit {

  @Input() racunRb: number = 0;
  @Input() trenutnoStanje: Stanje = {};
  @Input() onemogucenaIzmena: boolean = true;
  @Output() izmeniStanjeEvent = new EventEmitter<Stanje>();
  @Output() obrisiStanjeEvent = new EventEmitter<Stanje>();


  constructor() { }


  ngOnInit(): void {

  }

  izmeniOvoStanje(): void {
    this.izmeniStanjeEvent.emit(this.trenutnoStanje);
  }

  obrisiOvoStanje(): void {
    this.obrisiStanjeEvent.emit(this.trenutnoStanje);
  }

}
