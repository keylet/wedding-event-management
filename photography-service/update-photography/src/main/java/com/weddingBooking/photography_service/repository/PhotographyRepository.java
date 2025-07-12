package com.weddingBooking.photography_service.repository;

import com.weddingBooking.photography_service.model.Photography;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotographyRepository extends JpaRepository<Photography, Long> {

}
