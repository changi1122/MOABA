package com.backend.moaba.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Long userid;
    private String title;
    private String content;
    private String scheduleData;
    private String endDate;
}
