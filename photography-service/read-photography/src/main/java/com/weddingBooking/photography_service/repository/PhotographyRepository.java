package com.weddingBooking.photography_service.repository;

import com.weddingBooking.photography_service.model.Photography;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotographyRepository extends JpaRepository<Photography, Long> {
    List<Photography> findByName(String name);

}
