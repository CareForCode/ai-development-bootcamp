package com.example.todoapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Todo {

    @Id
    private UUID id;
    private String title;
    private boolean completed;

    protected Todo() {}

    public Todo(UUID id, String title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }

    public Todo(UUID id, String title, boolean completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    public UUID getId() { return id; }
    public String getTitle() { return title; }
    public boolean isCompleted() { return completed; }
}
