package com.weddingBooking.music_service.service;

import com.weddingBooking.music_service.model.Music;
import com.weddingBooking.music_service.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicService {

    @Autowired
    private MusicRepository musicRepository;

    public void saveMusic(Music music){
        musicRepository.save(music);
    }
}
