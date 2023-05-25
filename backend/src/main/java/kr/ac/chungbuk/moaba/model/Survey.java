package kr.ac.chungbuk.moaba.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NonNull;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Survey {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id private Long id;

    @NonNull private String title;              // 제목
    private String description;                 // 짧은설명문

    private String groupCategory;               // 그룹 형태
    private String meetingCategory;             // 모임 형태

    private OffsetDateTime startDateTime;       // 모임 시작 시간
    private OffsetDateTime submitDeadline;      // 제출 종료 시간

    private Integer mainContentOrder;           // 대표 본문 번호 (그래프로 표시될 투표 등 문단 순서 번호)

    @OneToMany
    @JoinColumn(name="survey_id")
    private List<SurveyContent> contents = new ArrayList<>();

    public Survey() {

    }
}
