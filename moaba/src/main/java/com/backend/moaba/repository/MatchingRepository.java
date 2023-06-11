package com.backend.moaba.repository;

import com.backend.moaba.entity.Matching;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchingRepository extends JpaRepository<Matching, Long> {

    @Query(nativeQuery = true, value = "Select m.ctgyid from matching m where m.qid = :qid ")
    List<Long> FindCtgyidbyQid(@Param("qid")Long qid);
}
