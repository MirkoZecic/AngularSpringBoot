package com.fpis.odobravanjeKredita.dto;

import com.fpis.odobravanjeKredita.entity.Klijent;
import com.fpis.odobravanjeKredita.entity.Stanje;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RacunDTO implements DTO{
    private Integer RB;
    private Integer BrojRacuna;
    private String TipRacuna;
    private List<Stanje> stanja;
    private Klijent klijent;
}
