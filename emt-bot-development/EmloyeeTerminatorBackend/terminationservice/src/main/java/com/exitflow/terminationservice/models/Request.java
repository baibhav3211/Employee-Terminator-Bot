package com.exitflow.terminationservice.models;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="Requests")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Request {
    @Id
    private int e_id;
    private String firstname;
    private String lastname;
    private String department;
    private String lastWorkingDay;
    private String resignationDate;
    private int status;

}
