package kr.ac.chungbuk.moaba.repository;

import kr.ac.chungbuk.moaba.model.Attempt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AttemptRepository extends JpaRepository<Attempt, Long> {
    Optional<Attempt> findAttemptByUserId(Long userId);
}
