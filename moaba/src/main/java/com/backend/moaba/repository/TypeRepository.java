package com.backend.moaba.repository;

import com.backend.moaba.entity.Qtype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<Qtype, Long> {

    @Query(nativeQuery = true, value = "Select * from qtype qt where qt.anwtype = :qtype")
    Long FindByType(@Param("qtype")String qtype);

    @Query(nativeQuery = true, value = "Select qt.anwtype from qtype qt where qt.id = :qid")
    String FindTypeByID(@Param("qid")Long qid);
}
