package com.fpis.odobravanjeKredita.mapper;

import com.fpis.odobravanjeKredita.dto.RacunDTO;
import com.fpis.odobravanjeKredita.entity.Racun;
import org.springframework.stereotype.Component;

@Component
public class RacunMapper implements EntityDtoMapper<RacunDTO, Racun> {
    @Override
    public RacunDTO toDto(Racun entity) {
        return new RacunDTO(entity.getRB(), entity.getBrojRacuna(), entity.getTipRacuna(), entity.getStanja(), entity.getKlijent());
    }

    @Override
    public Racun toEntity(RacunDTO dto) {
        return new Racun(dto.getRB(), dto.getBrojRacuna(), dto.getTipRacuna(), dto.getStanja(), dto.getKlijent());
    }
}
