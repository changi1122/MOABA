package com.backend.moaba.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LQTEMPDTO {
    private String answerType;
    private String question;
    private List<String> answers;
    private List<Map<String, Integer>> result;
}
