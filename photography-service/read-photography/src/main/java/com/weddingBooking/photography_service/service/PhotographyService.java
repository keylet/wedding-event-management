package com.weddingBooking.photography_service.service;


import com.weddingBooking.photography_service.model.Photography;
import com.weddingBooking.photography_service.repository.PhotographyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotographyService {

    @Autowired
    private PhotographyRepository photographyRepository;

    public List<Photography> getAllPhotography(){
        return photographyRepository.findAll();
    }

    public Photography getPhotographyById(Long id_photograhy){
        return photographyRepository.findById(id_photograhy).orElse(null);
    }

    public List<Photography> searchPhotographyByName(String name){
        return photographyRepository.findByName(name);
    }
}
