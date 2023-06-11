package com.backend.moaba.repository;

import com.backend.moaba.entity.QustBoxList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QustBoxListRepository extends JpaRepository<QustBoxList, Long> {

    @Query(nativeQuery = true, value = "Select b.title from qustboxlist b where b.qust_boxid = :bid")
    List<String> FindtitlesByBoxID(@Param("bid")Long bid);
}
