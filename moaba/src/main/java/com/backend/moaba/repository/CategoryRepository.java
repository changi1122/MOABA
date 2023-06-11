package com.backend.moaba.repository;

import com.backend.moaba.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query(nativeQuery = true, value = "SELECT c.id from category c where c.ctgytype = :cstr ")
    Long FindIDbyStr(@Param("cstr")String cstr);
}
