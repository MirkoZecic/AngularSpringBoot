package com.fpis.odobravanjeKredita.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class KlijentDTO implements DTO {
    private Integer KlijentID;
    private String ImeIPrezime;
    private String PIB;
    private String AdresaISediste;
}
