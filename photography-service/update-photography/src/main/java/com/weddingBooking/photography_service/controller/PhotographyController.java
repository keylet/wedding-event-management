package com.weddingBooking.photography_service.controller;


import com.weddingBooking.photography_service.model.Photography;
import com.weddingBooking.photography_service.service.PhotographyService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/photographyU")
@Tag(name = "Photography API", description = "Operations to update photography services")

public class PhotographyController {

    @Autowired
    private PhotographyService photographyService;
    @PutMapping("/update/{id_photography}")
    private String updatePhotography(@PathVariable Long id_photography,
                                     @RequestBody Photography photography){
        photographyService.editPhotography(id_photography, photography);
        return "Photography service update successfully";
    }
}
