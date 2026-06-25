package com.nexora.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record QuoteRequestDto(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100)
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email")
    String email,

    String phone,
    String company,

    @NotBlank(message = "Industry is required")
    String industry,

    @NotBlank(message = "Project type is required")
    String projectType,

    @NotBlank(message = "Budget range is required")
    String budgetRange,

    @NotBlank(message = "Description is required")
    @Size(min = 20, max = 5000)
    String description
) {}
