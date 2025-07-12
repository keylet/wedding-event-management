package com.weddingBooking.decoration_service.controller;

import com.weddingBooking.decoration_service.model.Decoration;
import com.weddingBooking.decoration_service.service.DecorationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/decorationU")
@Tag(name = "Decoration API", description = "Operations to update decoration services")

public class DecorationController {

    @Autowired
    private DecorationService decorationService;
    @PutMapping("/update/{id_decoration}")
    private String updateDecoration(@PathVariable Long id_decoration,
                                    @RequestBody Decoration decoration){
        decorationService.updateDecoration(id_decoration, decoration);
        return "Decoration service update successfully";
    }
}
