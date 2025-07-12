package com.weddingBooking.decoration_service.controller;

import com.weddingBooking.decoration_service.model.Decoration;
import com.weddingBooking.decoration_service.service.DecorationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/decorationD")
@Tag(name = "Decoration API", description = "Operations to delete decoration services")

public class DecorationController {

    @Autowired
    private DecorationService decorationService;
    @DeleteMapping("/delete/{id_decoration}")
    private String deleteCatering(@PathVariable Long id_decoration){
        decorationService.deleteDecoration(id_decoration);
        return "Decoration service delete successfully";
    }
}
