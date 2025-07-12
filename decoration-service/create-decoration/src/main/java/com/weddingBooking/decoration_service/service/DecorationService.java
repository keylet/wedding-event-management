package com.weddingBooking.decoration_service.service;


import com.weddingBooking.decoration_service.model.Decoration;
import com.weddingBooking.decoration_service.repository.DecorationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DecorationService {

    @Autowired
    private DecorationRepository decorationRepository;

    public void saveDecoration(Decoration decoration){decorationRepository.save(decoration);}

}
