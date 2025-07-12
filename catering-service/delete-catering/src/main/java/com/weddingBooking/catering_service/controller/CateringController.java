package com.weddingBooking.catering_service.controller;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.service.CateringService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.ParameterResolutionDelegate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cateringD")
@Tag(name = "Catering API", description = "Operations to delete catering services")

public class CateringController {

    @Autowired
    private CateringService cateringService;
    @DeleteMapping("/delete/{id_catering}")
    private String deleteCatering(@PathVariable Long id_catering){
        cateringService.deleteCatering(id_catering);
        return "Delete Catering service successfully";
    }
}
