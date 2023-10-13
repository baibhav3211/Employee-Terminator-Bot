package com.exitflow.terminationservice.services;

import com.exitflow.terminationservice.models.Asset;
import com.exitflow.terminationservice.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssetService {

    @Autowired
    private AssetRepository repository;

    public Asset addAsset(Asset asset){
        return repository.save(asset);
    }
}
