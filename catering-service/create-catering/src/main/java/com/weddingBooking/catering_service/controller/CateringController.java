package com.weddingBooking.catering_service.controller;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.service.CateringService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cateringC")
@Tag(name = "Catering API", description = "Operations to create catering services")

public class CateringController {

    @Autowired
    private CateringService cateringService;
    @PostMapping("/create")
    private String createCatering(@RequestBody Catering catering){
        cateringService.saveCatering(catering);
        return "Catering service create successfully";
    }
}
