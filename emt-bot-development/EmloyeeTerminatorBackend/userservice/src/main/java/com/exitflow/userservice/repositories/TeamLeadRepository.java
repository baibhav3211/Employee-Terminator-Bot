package com.exitflow.userservice.repositories;

import com.exitflow.userservice.models.TeamLead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamLeadRepository extends JpaRepository<TeamLead,Integer> {
    Optional<TeamLead> findById(int id);
    boolean existsById(int id);
    void deleteById(int id);

}
