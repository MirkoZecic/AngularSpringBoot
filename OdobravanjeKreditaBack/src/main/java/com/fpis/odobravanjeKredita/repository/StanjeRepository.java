/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fpis.odobravanjeKredita.repository;

import com.fpis.odobravanjeKredita.entity.Stanje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.List;

/**
 * @author Mirko
 */
@Repository
@EnableTransactionManagement
public interface StanjeRepository extends JpaRepository<Stanje, Integer> {

//    @Modifying
//    @Query(value = "DELETE FROM stanje WHERE stanjeid=:stanjeId and rb=:rb", nativeQuery = true)
//    void obrisiStanje(@Param("stanjeId") Integer stanjeId, @Param("rb") Integer rbRacuna);

    @Query(value = "SELECT * FROM stanje where rb=:rb", nativeQuery = true)
    List<Stanje> vratiStanja(@Param("rb") Integer rbRacuna);
}
