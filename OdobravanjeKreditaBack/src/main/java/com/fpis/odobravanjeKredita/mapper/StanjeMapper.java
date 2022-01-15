package com.fpis.odobravanjeKredita.mapper;

import com.fpis.odobravanjeKredita.dto.StanjeDTO;
import com.fpis.odobravanjeKredita.entity.Stanje;
import org.springframework.stereotype.Component;

@Component
public class StanjeMapper implements EntityDtoMapper<StanjeDTO, Stanje> {
    @Override
    public StanjeDTO toDto(Stanje entity) {
        return new StanjeDTO(entity.getStanjeID(), entity.getIznosStanja());
    }

    @Override
    public Stanje toEntity(StanjeDTO dto) {
        return new Stanje(dto.getStanjeID(), dto.getIznosStanja());
    }
}
