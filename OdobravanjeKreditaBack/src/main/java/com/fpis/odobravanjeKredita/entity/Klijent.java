package com.fpis.odobravanjeKredita.entity;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Klijent implements Serializable {

    @Id
    private Integer KlijentID;

    @NonNull
    private String ImeIPrezime;

    @NonNull
    private String PIB;

    @NonNull
    private String AdresaISediste;

}
