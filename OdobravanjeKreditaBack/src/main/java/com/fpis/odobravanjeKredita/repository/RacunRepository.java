/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fpis.odobravanjeKredita.repository;

import com.fpis.odobravanjeKredita.dto.RacunDTO;
import com.fpis.odobravanjeKredita.entity.Racun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


/**
 * @author Mirko
 */
@Repository
public interface RacunRepository extends JpaRepository<Racun, Integer> {

    @Query(value = "SELECT * FROM racun WHERE klijent_Id=:klijentId", nativeQuery = true)
    Racun findByKlientId(@Param("klijentId") Integer klijentID);

    @Query(value = "SELECT * FROM racun WHERE klijent_Id IS NULL", nativeQuery = true)
    List<Racun> vratiSveSlobodne();

    @Query(value = "SELECT DISTINCT tip_racuna FROM racun", nativeQuery = true)
    List<String> vratiSveTipove();

    @Query(value = "SELECT * FROM racun where broj_racuna=:broj and tip_racuna=:tip", nativeQuery = true)
    Optional<Racun> vratiJedan(@Param("broj") Integer broj, @Param("tip") String tip);
}
