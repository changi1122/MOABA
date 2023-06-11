package com.backend.moaba.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QustBoxDTO {
    private String title;
    private String questiontype;
    private List<String> list;
}
