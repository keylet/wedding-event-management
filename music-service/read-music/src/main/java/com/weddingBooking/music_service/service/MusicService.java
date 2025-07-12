package com.weddingBooking.music_service.service;

import com.weddingBooking.music_service.model.Music;
import com.weddingBooking.music_service.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService {

    @Autowired
    private MusicRepository musicRepository;

    public List<Music> getAllMusic(){
        return musicRepository.findAll();
    }

    public Music getMusicById(Long id_music){
        return musicRepository.findById(id_music).orElse(null);
    }

    public List<Music> searchMusicByName(String name){
        return musicRepository.findByName(name);
    }
}
