package com.weddingBooking.decoration_service.service;

import com.weddingBooking.decoration_service.model.Decoration;
import com.weddingBooking.decoration_service.repository.DecorationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DecorationService {

    @Autowired
    private DecorationRepository decorationRepository;

    public List<Decoration> getAllDecoration(){
        return decorationRepository.findAll();
    }

    public Decoration getDecorationById(Long id_decoration){
        return decorationRepository.findById(id_decoration).orElse(null);
    }

    public List<Decoration> searchDecorationByName(String name){
        return decorationRepository.findByName(name);
    }

}
