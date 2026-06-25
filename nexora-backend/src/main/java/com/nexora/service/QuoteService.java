package com.nexora.service;

import com.nexora.dto.QuoteRequestDto;
import com.nexora.entity.QuoteRequestEntity;
import com.nexora.repository.QuoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;

    public QuoteService(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    @Transactional
    public QuoteRequestEntity saveQuote(QuoteRequestDto request) {
        QuoteRequestEntity quote = new QuoteRequestEntity();
        quote.setName(request.name());
        quote.setEmail(request.email());
        quote.setPhone(request.phone());
        quote.setCompany(request.company());
        quote.setIndustry(request.industry());
        quote.setProjectType(request.projectType());
        quote.setBudgetRange(request.budgetRange());
        quote.setDescription(request.description());
        return quoteRepository.save(quote);
    }
}
