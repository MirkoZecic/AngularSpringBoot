package com.fpis.odobravanjeKredita.service;

import com.fpis.odobravanjeKredita.dto.RacunDTO;
import com.fpis.odobravanjeKredita.entity.Racun;
import com.fpis.odobravanjeKredita.mapper.RacunMapper;
import com.fpis.odobravanjeKredita.repository.RacunRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class RacunService {

    @Autowired
    private final RacunRepository racunRepository;
    @Autowired
    private final RacunMapper racunMapper;


    public List<RacunDTO> vratiSveSlobodneRacune() {
        return racunRepository.vratiSveSlobodne().stream().map(rac -> racunMapper.toDto(rac)).collect(Collectors.toList());
    }

    public RacunDTO postaviKlijenta(RacunDTO racunDto) {
        Optional<Racun> dobijeniRacun = racunRepository.findById(racunDto.getRB());
        if (dobijeniRacun.isPresent()) {
            dobijeniRacun.get().setKlijent(racunDto.getKlijent());
            return racunMapper.toDto(racunRepository.save(dobijeniRacun.get()));
        } else
            throw new IllegalArgumentException("Taj racun ne postoji!");
    }

    public RacunDTO vratiKlijentovRacun(Integer klijentId) {
        Racun racun = racunRepository.findByKlientId(klijentId);
        if (racun != null) {
            return racunMapper.toDto(racun);
        } else
            return null;
    }

    public List<String> vratiTipoveRacuna() {
        return racunRepository.vratiSveTipove();
    }

    public RacunDTO vratiJedan(Integer broj, String tip) {
        Optional<Racun> racun = racunRepository.vratiJedan(broj, tip);
        if (racun.isPresent()) {
            return racunMapper.toDto(racun.get());
        } else
            throw new IllegalArgumentException("Taj racun ne postoji");
    }

    public RacunDTO postaviStanja(RacunDTO racunDTO) {
        Optional<Racun> racun = racunRepository.findById(racunDTO.getRB());
        if (racun.isPresent()) {
            racun.get().getStanja().clear();
            racun.get().getStanja().addAll(racunDTO.getStanja());
            try {
                return racunMapper.toDto(racunRepository.save(racun.get()));
            } catch (Exception ex) {
                throw new IllegalArgumentException("Ne smeju postojati 2 ista ID-ja");
            }
        } else
            throw new IllegalArgumentException("Taj racun ne postoji");
    }
}
