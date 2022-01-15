package com.fpis.odobravanjeKredita.mapper;

import com.fpis.odobravanjeKredita.dto.KlijentDTO;
import com.fpis.odobravanjeKredita.entity.Klijent;
import org.springframework.stereotype.Component;

@Component
public class KlijentMapper implements EntityDtoMapper<KlijentDTO, Klijent> {
    @Override
    public KlijentDTO toDto(Klijent entity) {
        return new KlijentDTO(entity.getKlijentID(), entity.getImeIPrezime(), entity.getPIB(), entity.getAdresaISediste());
    }

    @Override
    public Klijent toEntity(KlijentDTO dto) {
        return new Klijent(dto.getKlijentID(), dto.getImeIPrezime(), dto.getPIB(), dto.getAdresaISediste());
    }
}
