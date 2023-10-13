package com.exitflow.userservice.services;

import com.exitflow.userservice.models.History;
import com.exitflow.userservice.repositories.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryServiceImpl implements HistoryService{

    @Autowired
    private HistoryRepository historyRepository;

    @Override
    public History addHistory(History history){
        return historyRepository.save(history);
    }

    @Override
    public void removeHistory(int e_id){
        historyRepository.deleteById(e_id);
    }

    @Override
    public History getHistoryById(int e_id){
        return historyRepository.findById(e_id).orElse(null);
    }

    @Override
    public List<History> getAllHistory(){
        return historyRepository.findAll();
    }
}
