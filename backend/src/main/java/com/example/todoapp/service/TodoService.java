package com.example.todoapp.service;

import com.example.todoapp.dto.TodoDTO;
import com.example.todoapp.entity.Todo;
import com.example.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    public TodoDTO create(String title) {
        Todo todo = new Todo(UUID.randomUUID(), title);
        Todo saved = todo;
        //Todo saved = repository.save(todo);
        return new TodoDTO(saved.getId(), "", saved.isCompleted());
    }
}
