package com.example.todoapp.service;

import com.example.todoapp.dto.TodoDTO;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TodoService {

    public TodoDTO create(String title) {
        return new TodoDTO(UUID.randomUUID(), title, false);
    }
}
