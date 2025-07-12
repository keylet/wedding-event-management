package com.weddingBooking.photography_service.service;

import com.weddingBooking.photography_service.repository.PhotographyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotographyService {

    @Autowired
    private PhotographyRepository photographyRepository;

    public void deletePhotography(Long id_photography){photographyRepository.deleteById(id_photography);}

}
