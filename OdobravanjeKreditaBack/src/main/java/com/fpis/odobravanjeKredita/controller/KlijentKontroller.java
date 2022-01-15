/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fpis.odobravanjeKredita.controller;

import com.fpis.odobravanjeKredita.dto.KlijentDTO;

import java.util.List;

import com.fpis.odobravanjeKredita.service.KlijentService;
import com.fpis.odobravanjeKredita.service.RacunService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@AllArgsConstructor
@RequestMapping(path = "/klijent")
@CrossOrigin(origins = "http://localhost:4200")
public class KlijentKontroller {

    @Autowired
    private final KlijentService klijentService;
    @Autowired
    private final RacunService racunService;


    @GetMapping("/vratiSve")
    public List<KlijentDTO> vratiSveKlijente() {
        return klijentService.vratiSveKlijente();
    }

    @GetMapping("/vratiJedan/{klijentId}")
    public KlijentDTO vratiKlijenta(@PathVariable Integer klijentId) {
        return klijentService.vratiKlijenta(klijentId);
    }

    @PostMapping("/dodaj")
    public KlijentDTO dodajKlijenta( @RequestBody KlijentDTO klijentDTO) {
        return klijentService.dodajKlijenta(klijentDTO);
    }

    @PutMapping("/izmeni/{klijentId}")
    public KlijentDTO vratiKlijenta(@PathVariable Integer klijentId, @RequestBody KlijentDTO klijentDTO) {
        return klijentService.izmeniKlijenta(klijentId,klijentDTO);
    }
}
