package com.fpis.odobravanjeKredita.controller;

import com.fpis.odobravanjeKredita.dto.StanjeDTO;
import com.fpis.odobravanjeKredita.service.StanjeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/stanje")
@CrossOrigin(origins = "http://localhost:4200")
public class StanjeKontroller {

    @Autowired
    private final StanjeService stanjeService;

    @GetMapping("/vratiSve")
    public List<StanjeDTO> vratiSvaStanja() {
        return stanjeService.vratiSvaStanja();
    }

    @GetMapping("/vratiStanja/{rb}")
    public List<StanjeDTO> vratiStanja(@PathVariable Integer rb) {
        return stanjeService.vratiStanja(rb);
    }

//    @PutMapping("/izmeni")
//    public StanjeDTO izmeni(@RequestBody StanjeDTO stanjeDTO) {
//        return stanjeService.izmeni(stanjeDTO);
//    }
//
//    @DeleteMapping("/obrisi")
//    public String obrisi(@RequestParam Integer stanjeId, @RequestParam Integer racunId) {
//        return stanjeService.obrisi(stanjeId, racunId);
//    }
}
