package com.fpis.odobravanjeKredita.mapper;

import com.fpis.odobravanjeKredita.dto.DTO;

import java.io.Serializable;

public interface EntityDtoMapper<D extends DTO, E extends Serializable> {
    D toDto(E entity);

    E toEntity(D dto);
}
