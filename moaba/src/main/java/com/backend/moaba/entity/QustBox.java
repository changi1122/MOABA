package com.backend.moaba.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "qustbox")
public class QustBox {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Long questionid;
    private String title;
    private Long questiontype;
}
