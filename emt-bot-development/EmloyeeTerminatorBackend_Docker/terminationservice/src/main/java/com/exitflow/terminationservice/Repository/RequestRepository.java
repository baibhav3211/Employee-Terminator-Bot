package com.exitflow.terminationservice.repository;


import com.exitflow.terminationservice.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {
    Optional<Request> findById(int e_id);
    void deleteById(int e_id);
    List<Request> findAll();

}
