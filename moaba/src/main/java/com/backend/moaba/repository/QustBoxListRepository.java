package com.backend.moaba.repository;

import com.backend.moaba.entity.QustBoxList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QustBoxListRepository extends JpaRepository<QustBoxList, Long> {

    @Query(nativeQuery = true, value = "Select * from qustboxlist b where b.qust_boxid = :bid")
    List<QustBoxList> FindtitlesByBoxID(@Param("bid")Long bid);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) from qustboxlist b where b.qust_boxid = :bid ")
    Integer CountAllByBoxID(@Param("bid")Long bid);
}
