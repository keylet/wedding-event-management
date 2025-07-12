package com.weddingBooking.decoration_service.repository;

import com.weddingBooking.decoration_service.model.Decoration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DecorationRepository extends JpaRepository<Decoration, Long> {
    List<Decoration> findByName(String name);
}
