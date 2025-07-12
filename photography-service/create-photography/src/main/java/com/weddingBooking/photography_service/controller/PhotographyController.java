package com.weddingBooking.photography_service.controller;


import com.weddingBooking.photography_service.model.Photography;
import com.weddingBooking.photography_service.service.PhotographyService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/photographyC")
@Tag(name = "Photography API", description = "Operations to create photography services")

public class PhotographyController {

    @Autowired
    private PhotographyService photographyService;
    @PostMapping("/create")
    private String createPhotography(@RequestBody Photography photography){
        photographyService.savePhotography(photography);
        return "Photography service create successfully";
    }
}
