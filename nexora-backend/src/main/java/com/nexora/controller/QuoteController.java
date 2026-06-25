package com.nexora.controller;

import com.nexora.dto.ApiResponse;
import com.nexora.dto.QuoteRequestDto;
import com.nexora.entity.QuoteRequestEntity;
import com.nexora.service.QuoteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {

    private final QuoteService quoteService;

    public QuoteController(QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> submitQuote(
            @Valid @RequestBody QuoteRequestDto request) {
        QuoteRequestEntity saved = quoteService.saveQuote(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(
            ApiResponse.success(
                "Quote request received. We'll send a proposal within 48 hours.",
                Map.of("id", saved.getId())
            )
        );
    }
}
