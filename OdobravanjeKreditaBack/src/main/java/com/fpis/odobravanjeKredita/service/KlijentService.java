package com.fpis.odobravanjeKredita.service;

import com.fpis.odobravanjeKredita.dto.KlijentDTO;
import com.fpis.odobravanjeKredita.entity.Klijent;
import com.fpis.odobravanjeKredita.mapper.KlijentMapper;
import com.fpis.odobravanjeKredita.repository.KlijentRepository;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.InstanceAlreadyExistsException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class KlijentService {

    @Autowired
    private final KlijentRepository klijentRepository;
    @Autowired
    private final KlijentMapper klijentMapper;

    public List<KlijentDTO> vratiSveKlijente() {
        return klijentRepository.findAll().stream().map(klij -> klijentMapper.toDto(klij)).collect(Collectors.toList());
    }

    @SneakyThrows
    public KlijentDTO dodajKlijenta(KlijentDTO klijentDTO) {
        if (klijentDTO.getKlijentID() == null)
            throw new NullPointerException("KlijentID mora biti postavljen!");

        Optional<Klijent> klijentIzBaze = klijentRepository.findById(klijentDTO.getKlijentID());
        if (klijentIzBaze.isPresent())
            throw new InstanceAlreadyExistsException("Klijent sa tim ID-em vec postoji!");

        return klijentMapper.toDto(klijentRepository.save(klijentMapper.toEntity(klijentDTO)));
    }

    public KlijentDTO vratiKlijenta(Integer klijentId) {
        Optional<Klijent> klijent = klijentRepository.findById(klijentId);
        if (klijent.isPresent())
            return klijentMapper.toDto(klijent.get());
        else
            return null;
    }

    public KlijentDTO izmeniKlijenta(Integer klijentId, KlijentDTO klijentDTO) {
        Optional<Klijent> klijentIzBaze = klijentRepository.findById(klijentId);
        if (klijentIzBaze.isPresent()) {
            klijentIzBaze.get().setKlijentID(klijentDTO.getKlijentID());
            klijentIzBaze.get().setImeIPrezime(klijentDTO.getImeIPrezime());
            klijentIzBaze.get().setAdresaISediste(klijentDTO.getAdresaISediste());
            klijentIzBaze.get().setPIB(klijentDTO.getPIB());
            return klijentMapper.toDto(klijentRepository.save(klijentIzBaze.get()));
        }
        return null;
    }
}
