package com.exitflow.terminationservice.models;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Assets")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Asset {
    @Id
    private int assetId;
    private String present;
}
