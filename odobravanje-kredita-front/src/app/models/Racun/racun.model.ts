import { Klijent } from "../Klijent/klijent.model";
import { Stanje } from "../Stanje/stanje.model";

export class Racun {
    rb?: number
    brojRacuna?: number;
    tipRacuna?: string;
    stanja?: Stanje[];
    klijent?: Klijent;
}
