package com.weddingBooking.photography_service.service;


import com.weddingBooking.photography_service.model.Photography;
import com.weddingBooking.photography_service.repository.PhotographyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotographyService {

    @Autowired
    private PhotographyRepository photographyRepository;

    public void editPhotography(Long id_photography, Photography updatePhotography) {
        Photography existingPhotography = photographyRepository.findById(id_photography)
                .orElseThrow(() -> new RuntimeException("Photography with ID " + id_photography + " not found."));
        existingPhotography.setName(updatePhotography.getName());
        existingPhotography.setPrice(updatePhotography.getPrice());
        photographyRepository.save(existingPhotography);
    }

}
