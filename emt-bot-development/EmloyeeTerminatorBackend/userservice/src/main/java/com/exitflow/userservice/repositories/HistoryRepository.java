package com.exitflow.userservice.repositories;

import com.exitflow.userservice.models.History;
import com.exitflow.userservice.models.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HistoryRepository extends JpaRepository<History,Integer> {
    Optional<History> findById(int e_id);
    void deleteById(int e_id);
    List<History> findAll();
}
