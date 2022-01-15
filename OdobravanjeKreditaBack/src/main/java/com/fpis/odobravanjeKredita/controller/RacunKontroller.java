package com.fpis.odobravanjeKredita.controller;

import com.fpis.odobravanjeKredita.dto.RacunDTO;
import com.fpis.odobravanjeKredita.service.RacunService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/racun")
@CrossOrigin(origins = "http://localhost:4200")
public class RacunKontroller {

    @Autowired
    private final RacunService racunService;

    @GetMapping("/vratiSve")
    public List<RacunDTO> vratiSveRacune() {
        return racunService.vratiSveRacune();
    }

    @GetMapping(path = "/vratiJedan")
    public RacunDTO follow(@RequestParam Integer broj, @RequestParam String tip) {
        return racunService.vratiJedan(broj,tip);
    }

    @GetMapping("/vratiKlijentovRacun/{klijentId}")
    public RacunDTO vratiKlijentovRacun(@PathVariable Integer klijentId) {
        return racunService.vratiKlijentovRacun(klijentId);
    }

    @PutMapping("/postaviKlijentaNaRacunu")
    public RacunDTO postaviKlijentaNaRacunu(@RequestBody RacunDTO racunDTO) {
        return racunService.postaviKlijenta(racunDTO);
    }

    @PutMapping("/postaviStanja")
    public RacunDTO postaviStanja(@RequestBody RacunDTO racunDTO) {
        return racunService.postaviStanja(racunDTO);
    }

    @GetMapping("/vratiTipoveRacuna")
    public List<String> vratiTipoveRacuna() {
        return racunService.vratiTipoveRacuna();
    }
}
