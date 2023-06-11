package com.backend.moaba.repository;

import com.backend.moaba.entity.QustBox;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QustBoxRepository extends JpaRepository<QustBox,Long> {

    @Query(nativeQuery = true, value = "Select * from qustbox qb where qb.questionid = :qid")
    List<QustBox> FindByQuestionID(@Param("qid")Long qid);

    @Query(nativeQuery = true, value = "SELECT qb.id from qustbox qb where questionid = :qid")
    List<Long> FindQuestionIDByQuestionID(@Param("qid")Long qid);
}
