package com.weddingBooking.music_service.service;

import com.weddingBooking.music_service.model.Music;
import com.weddingBooking.music_service.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicService {

    @Autowired
    private MusicRepository musicRepository;

    public void editMusic(Long id_music, Music updateMusic) {
        Music existingMusic = musicRepository.findById(id_music)
                .orElseThrow(() -> new RuntimeException("Music with ID " + id_music + " not found."));
        existingMusic.setName(updateMusic.getName());
        existingMusic.setPrice(updateMusic.getPrice());
        musicRepository.save(existingMusic);
    }
}
