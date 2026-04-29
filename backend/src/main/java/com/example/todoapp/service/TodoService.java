package com.example.todoapp.service;

import com.example.todoapp.dto.TodoDTO;

public interface TodoService {
    TodoDTO create(String title);
}
