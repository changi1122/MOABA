package com.backend.moaba.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class headerDTO {
    private Long id;
    private Integer answer;
    private String dueDate;
    private String meetingDate;
    private String name;
}
