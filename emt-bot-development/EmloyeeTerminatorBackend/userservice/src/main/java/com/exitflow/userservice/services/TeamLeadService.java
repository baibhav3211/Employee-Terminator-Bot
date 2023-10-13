package com.exitflow.userservice.services;

import com.exitflow.userservice.exceptions.UserDoesNotExistsException;
import com.exitflow.userservice.models.Manager;
import com.exitflow.userservice.models.TeamLead;

public interface TeamLeadService {
    TeamLead addTeamLead(TeamLead teamLead);
    void removeTeamLead(int teamId);
    TeamLead getTeamLeadByTeamId(int teamId) throws UserDoesNotExistsException;
    Boolean TeamLeadExists(int teamId);
}
