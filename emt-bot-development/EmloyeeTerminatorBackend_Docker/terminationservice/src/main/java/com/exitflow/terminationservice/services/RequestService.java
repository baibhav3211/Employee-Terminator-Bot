package com.exitflow.terminationservice.services;


import com.exitflow.terminationservice.models.Request;
import com.exitflow.terminationservice.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    private RequestRepository repository;

    public List<Request> findAllRequests(){
        return repository.findAll();
    }

    public Request addRequest(Request request){
        return repository.save(request);
    }

    public void removeRequest(int e_id){
        repository.deleteById(e_id);
    }

    public Request getRequestByE_Id(int e_id){
        return repository.findById(e_id).orElse(null);
    }

    public Request updateRequestByE_Id(int e_id){
        Request request = repository.findById(e_id).orElse(null);
        request.setStatus(request.getStatus()+1);
        return repository.save(request);
    }

}
