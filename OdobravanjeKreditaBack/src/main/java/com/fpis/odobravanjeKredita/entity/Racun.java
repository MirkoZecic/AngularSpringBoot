package com.fpis.odobravanjeKredita.entity;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Racun implements Serializable {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer RB;

    @NonNull
    private Integer BrojRacuna;

    @NonNull
    private String TipRacuna;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="rb")
    private List<Stanje> stanja;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "klijent_id", referencedColumnName = "KlijentID")
    private Klijent klijent;

}
