package com.backend.moaba.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "qustboxlist")
public class QustBoxList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "qust_boxid")
    private Long qust_boxid;

    private String title;
}
