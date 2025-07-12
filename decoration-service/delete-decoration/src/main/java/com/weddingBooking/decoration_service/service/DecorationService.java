package com.weddingBooking.decoration_service.service;


import com.weddingBooking.decoration_service.repository.DecorationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DecorationService {

    @Autowired
    private DecorationRepository decorationRepository;

    public void deleteDecoration(Long id_decoration){decorationRepository.deleteById(id_decoration);}

}
