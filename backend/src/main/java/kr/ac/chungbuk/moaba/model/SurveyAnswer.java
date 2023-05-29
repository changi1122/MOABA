package kr.ac.chungbuk.moaba.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.OffsetDateTime;

@Data
@Entity
public class SurveyAnswer {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id private Long id;

    private String answer;                      // 답변 내용 (질문 종료에 맞춰 처리)
    private Integer answerInt;                  // 답변 내용 정수형
    private OffsetDateTime answerDate;          // 답변 내용 날짜 시간
}
