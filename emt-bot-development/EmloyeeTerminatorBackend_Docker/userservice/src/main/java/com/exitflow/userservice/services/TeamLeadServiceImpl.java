package com.exitflow.userservice.services;

import com.exitflow.userservice.exceptions.UserDoesNotExistsException;
import com.exitflow.userservice.models.TeamLead;
import com.exitflow.userservice.repositories.TeamLeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamLeadServiceImpl implements TeamLeadService{

    @Autowired
    private TeamLeadRepository teamLeadRepository;

    @Override
    public TeamLead addTeamLead(TeamLead teamLead){
        return teamLeadRepository.save(teamLead);
    }

    @Override
    public void removeTeamLead(int teamId){
        teamLeadRepository.deleteById(teamId);
    }

    @Override
    public TeamLead getTeamLeadByTeamId(int teamId) throws UserDoesNotExistsException {
       TeamLead teamLead= teamLeadRepository.findById(teamId).orElse(null);
       if(teamLead==null) throw new UserDoesNotExistsException("Then given team does not have a team lead at this moment");
       return teamLead;
    }

    @Override
    public Boolean TeamLeadExists(int teamId){
        return teamLeadRepository.existsById(teamId);
    }
}
