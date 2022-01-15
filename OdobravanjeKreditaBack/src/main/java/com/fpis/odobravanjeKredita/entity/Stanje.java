package com.fpis.odobravanjeKredita.entity;

import java.io.Serializable;

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
public class Stanje implements Serializable {

    @Id
    private Integer StanjeID;

    @NonNull
    private Double IznosStanja;

}
