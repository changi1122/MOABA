package com.backend.moaba.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "matching")
public class Matching {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private Long ctgyid;
    private Long qid;
}
