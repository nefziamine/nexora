package com.nexora.service;

import com.nexora.dto.ContactRequest;
import com.nexora.entity.ContactMessage;
import com.nexora.repository.ContactRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Transactional
    public ContactMessage saveContact(ContactRequest request) {
        ContactMessage message = new ContactMessage();
        message.setName(request.name());
        message.setEmail(request.email());
        message.setPhone(request.phone());
        message.setSubject(request.subject());
        message.setMessage(request.message());
        return contactRepository.save(message);
    }
}
