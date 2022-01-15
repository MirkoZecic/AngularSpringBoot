import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodajKlijentaComponent } from './components/dodaj-klijenta/dodaj-klijenta.component';
import { KlijentDetaljiComponent } from './components/klijent-detalji/klijent-detalji.component';
import { KlijentListaComponent } from './components/klijent-lista/klijent-lista.component';
import { DodajStanjeComponent } from './components/dodaj-stanje/dodaj-stanje.component';
import { StanjeDetaljiComponent } from './components/stanje-detalji/stanje-detalji.component';
import { StanjeListaComponent } from './components/stanje-lista/stanje-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    DodajKlijentaComponent,
    KlijentDetaljiComponent,
    KlijentListaComponent,
    DodajStanjeComponent,
    StanjeDetaljiComponent,
    StanjeListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
