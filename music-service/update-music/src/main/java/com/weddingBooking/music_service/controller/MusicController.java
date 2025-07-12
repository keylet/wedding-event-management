package com.weddingBooking.music_service.controller;

import com.weddingBooking.music_service.model.Music;
import com.weddingBooking.music_service.service.MusicService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("musicU")
@Tag(name = "Music API", description = "Operations to read music services")

public class MusicController {

    @Autowired
    private MusicService musicService;
    @PutMapping("/update/{id_music}")
    private String updateMusic(@PathVariable Long id_music,
                               @RequestBody Music music){
        musicService.editMusic(id_music, music);
        return "Music service edit successfully";
    }
}
