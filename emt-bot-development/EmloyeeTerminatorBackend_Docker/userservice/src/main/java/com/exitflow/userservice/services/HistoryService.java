package com.exitflow.userservice.services;

import com.exitflow.userservice.models.Employee;
import com.exitflow.userservice.models.History;

import java.util.List;
import java.util.Optional;

public interface HistoryService {

    History addHistory(History history);
    void removeHistory(int e_id);
    History getHistoryById(int e_id);
    List<History> getAllHistory();



}
