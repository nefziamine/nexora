package com.nexora.repository;

import com.nexora.entity.QuoteRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteRepository extends JpaRepository<QuoteRequestEntity, Long> {
}
