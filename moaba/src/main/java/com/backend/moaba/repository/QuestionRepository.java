package com.backend.moaba.repository;

import com.backend.moaba.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query(nativeQuery = true, value = "SELECT * from question q where q.userid = :uid order by q.end_date")
    List<Question> GetAll(@Param("uid")Long uid);
}
