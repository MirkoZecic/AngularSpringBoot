import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StanjeDetaljiComponent } from './components/stanje-detalji/stanje-detalji.component';
import { StanjeListaComponent } from './components/stanje-lista/stanje-lista.component';
import { DodajKlijentaComponent } from './components/dodaj-klijenta/dodaj-klijenta.component';
import { DodajStanjeComponent } from './components/dodaj-stanje/dodaj-stanje.component';
import { KlijentDetaljiComponent } from './components/klijent-detalji/klijent-detalji.component';
import { KlijentListaComponent } from './components/klijent-lista/klijent-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'klijenti', pathMatch: 'full' },
  { path: 'klijenti', component: KlijentListaComponent },
  { path: 'klijenti/:id', component: KlijentDetaljiComponent },
  { path: 'dodajKlijenta', component: DodajKlijentaComponent },
  { path: 'stanja', component: StanjeListaComponent },
  { path: 'stanja/:id', component: StanjeDetaljiComponent },
  { path: 'dodajStanje', component: DodajStanjeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
