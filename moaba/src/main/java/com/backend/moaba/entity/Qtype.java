package com.backend.moaba.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "qtype")
public class Qtype {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "anwtype")
    private String anwtype;
}
