package com.fpis.odobravanjeKredita.service;

import com.fpis.odobravanjeKredita.dto.StanjeDTO;
import com.fpis.odobravanjeKredita.entity.Stanje;
import com.fpis.odobravanjeKredita.mapper.StanjeMapper;
import com.fpis.odobravanjeKredita.repository.StanjeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class StanjeService {

    @Autowired
    private final StanjeRepository stanjeRepository;

    @Autowired
    private final StanjeMapper stanjeMapper;

    public List<StanjeDTO> vratiSvaStanja() {
        return stanjeRepository.findAll().stream().map(stanje -> stanjeMapper.toDto(stanje)).collect(Collectors.toList());
    }

//    public StanjeDTO izmeni(StanjeDTO stanjeDTO) {
//        Optional<Stanje> stanje = stanjeRepository.findById(stanjeDTO.getStanjeID());
//        if (stanje.isPresent()) {
//            stanje.get().setIznosStanja(stanjeDTO.getIznosStanja());
//            return stanjeMapper.toDto(stanjeRepository.save(stanje.get()));
//        } else {
//            throw new IllegalArgumentException("To stanje ne postoji!");
//        }
//    }
//
//    public String obrisi(Integer stanjeId, Integer racunId) {
//        stanjeRepository.obrisiStanje(stanjeId, racunId);
//        return "Uspesno obrisano stanje";
//    }

    public List<StanjeDTO> vratiStanja(Integer rb) {
        return stanjeRepository.vratiStanja(rb).stream().map(st -> stanjeMapper.toDto(st)).collect(Collectors.toList());
    }
}
