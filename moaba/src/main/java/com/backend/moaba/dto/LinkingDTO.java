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
public class LinkingDTO {
    private List<String> categories;
    private String dueDate;
    private String meetingDate;
    private String name;
    private List<LQDTO> questions;
}
