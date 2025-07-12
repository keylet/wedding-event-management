package com.weddingBooking.decoration_service.service;


import com.weddingBooking.decoration_service.model.Decoration;
import com.weddingBooking.decoration_service.repository.DecorationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DecorationService {

    @Autowired
    private DecorationRepository decorationRepository;

    public void updateDecoration(Long id_decoration, Decoration updatedecoration){
        Decoration existingDecoration = decorationRepository.findById(id_decoration).orElseThrow(() -> new RuntimeException("Decoration with ID"+ id_decoration+ "not found"));
        existingDecoration.setName(updatedecoration.getName());
        existingDecoration.setPrice(updatedecoration.getPrice());
        decorationRepository.save(existingDecoration);
    }

}
