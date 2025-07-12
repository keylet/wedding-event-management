package com.weddingBooking.music_service.controller;

import com.weddingBooking.music_service.service.MusicService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("musicD")
@Tag(name = "Music API", description = "Operations to delete music services")

public class MusicController {

    @Autowired
    private MusicService musicService;
    @DeleteMapping("/delete/{id_music}")
    private String deleteMusic(@PathVariable Long id_music){
        musicService.deleteMusic(id_music);
        return "Music service delete successfully";
    }
}
