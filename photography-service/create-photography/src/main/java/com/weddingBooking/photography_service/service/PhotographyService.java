package com.weddingBooking.photography_service.service;


import com.weddingBooking.photography_service.model.Photography;
import com.weddingBooking.photography_service.repository.PhotographyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotographyService {

    @Autowired
    private PhotographyRepository photographyRepository;

    public void savePhotography(Photography photography){photographyRepository.save(photography);}

}
