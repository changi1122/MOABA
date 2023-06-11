package com.backend.moaba.repository;


import com.backend.moaba.entity.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Query(nativeQuery = true, value = "SELECT * from answer a where a.boxid = :boxid ")
    List<Answer> FindAllbyBoxId(@Param("boxid")Long boxid);

    @Query(nativeQuery = true, value = "SELECT count(*) from answer a where a.boxid = :boxid")
    Integer CountbyBoxId(@Param("boxid")Long boxid);
}
