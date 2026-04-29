package com.example.todoapp.dto;

import java.util.UUID;

public record TodoDTO(UUID id, String title, boolean completed) {}
