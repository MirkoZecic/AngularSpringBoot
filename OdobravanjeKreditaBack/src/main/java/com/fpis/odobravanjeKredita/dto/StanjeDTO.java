package com.fpis.odobravanjeKredita.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class StanjeDTO implements DTO{

    private Integer StanjeID;
    private Double IznosStanja;
}
