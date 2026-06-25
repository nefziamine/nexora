package com.nexora.controller;

import com.nexora.dto.ApiResponse;
import com.nexora.dto.ContactRequest;
import com.nexora.entity.ContactMessage;
import com.nexora.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> submitContact(
            @Valid @RequestBody ContactRequest request) {
        ContactMessage saved = contactService.saveContact(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(
            ApiResponse.success(
                "Message received successfully. We'll respond within 24 hours.",
                Map.of("id", saved.getId())
            )
        );
    }
}
