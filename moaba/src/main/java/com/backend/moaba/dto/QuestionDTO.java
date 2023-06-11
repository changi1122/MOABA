package com.backend.moaba.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QuestionDTO {
    private String title;
    private String content;
    private String scheduleData;
    private String endDate;
    private String[] category;
    private QustBoxDTO qustBoxDTO;
}
