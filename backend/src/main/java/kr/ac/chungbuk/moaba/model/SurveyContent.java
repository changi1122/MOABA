package kr.ac.chungbuk.moaba.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NonNull;

@Data
@Entity
public class SurveyContent {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id private Long id;
    
    @NonNull Integer orders;                // Survey 표시되는 순서

    @NonNull
    private String subtitle;                // 부제목

    private String type;                    // 본문 종류 (일반 HTML, 텍스트박스, 장문 텍스트박스, 라디오버튼, 체크박스, 콤보박스, 일시)

    private String body;                    // 본문 내용 (프론트엔드에서 종류에 맞춰 표시)

    @OneToOne
    @JoinColumn(name="answer_id")
    private SurveyAnswer answer;

    public SurveyContent() {

    }
}
