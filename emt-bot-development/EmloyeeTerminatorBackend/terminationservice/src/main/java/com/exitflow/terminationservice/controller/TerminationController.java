package com.exitflow.terminationservice.controller;


import com.exitflow.terminationservice.models.Asset;
import com.exitflow.terminationservice.models.Request;
import com.exitflow.terminationservice.services.AssetService;
import com.exitflow.terminationservice.services.RequestService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/termination")
@Transactional
@CrossOrigin(origins = "*")

public class TerminationController {

    @Autowired
    private AssetService assetService;

    @Autowired
    private RequestService requestService;

    @PostMapping("request")
    public ResponseEntity<Request> addRequest(@RequestBody Request request){
        return new  ResponseEntity<>(requestService.addRequest(request),HttpStatus.CREATED);
    }

    @PostMapping("asset")
    public ResponseEntity<Asset> addAsset(@RequestBody Asset asset){
        return new  ResponseEntity<>(assetService.addAsset(asset),HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Request>> getAllRequests(){
        return new ResponseEntity<>(requestService.findAllRequests(),HttpStatus.FOUND);
    }

    @GetMapping("request/id/{e_id}")
    public ResponseEntity<Request> getRequestByE_id(@PathVariable int e_id){
        return new ResponseEntity<>(requestService.getRequestByE_Id(e_id),HttpStatus.FOUND);
    }

    @DeleteMapping("request/{e_id}")
    public ResponseEntity<?> deleteRequest(@PathVariable int e_id){
        requestService.removeRequest(e_id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("status/{e_id}")
    public ResponseEntity<Request> updateRequestStatus(@PathVariable int e_id){
        return new ResponseEntity<>(requestService.updateRequestByE_Id(e_id),HttpStatus.ACCEPTED);
    }


}
