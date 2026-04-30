package com.example.todoapp.service;

import com.example.todoapp.dto.TodoDTO;
import com.example.todoapp.entity.Todo;
import com.example.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    public List<TodoDTO> getAll() {
        return repository.findAll().stream()
                .map(todo -> new TodoDTO(todo.getId(), todo.getTitle(), todo.isCompleted()))
                .toList();
    }

    public TodoDTO create(String title) {
        Todo todo = new Todo(UUID.randomUUID(), title);
        Todo saved = repository.save(todo);
        return new TodoDTO(saved.getId(), saved.getTitle(), saved.isCompleted());
    }
}
