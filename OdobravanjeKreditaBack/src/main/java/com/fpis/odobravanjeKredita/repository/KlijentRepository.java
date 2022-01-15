/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fpis.odobravanjeKredita.repository;

import com.fpis.odobravanjeKredita.entity.Klijent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Mirko
 */
@Repository
public interface KlijentRepository extends JpaRepository<Klijent, Integer> {

}
