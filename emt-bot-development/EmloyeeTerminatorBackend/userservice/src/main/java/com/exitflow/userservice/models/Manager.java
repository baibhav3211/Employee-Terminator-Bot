package com.exitflow.userservice.models;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Managers")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Manager {

    @Id
    private String department;
    private String name;
    private  int e_id;
}
