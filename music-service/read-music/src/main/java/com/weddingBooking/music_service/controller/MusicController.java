package com.weddingBooking.music_service.controller;

import com.weddingBooking.music_service.model.Music;
import com.weddingBooking.music_service.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class MusicController {

    @Autowired
    private MusicService musicService;

    @QueryMapping
    public List<Music> getAllMusic(){
        return musicService.getAllMusic();
    }

    @QueryMapping
    public Music getMusicById(@Argument Long id_music){
        return musicService.getMusicById(id_music);
    }

    @QueryMapping
    public List<Music> searchMusicByName(@Argument String name){
        return musicService.searchMusicByName(name);
    }
}
