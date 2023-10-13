import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InputForm } from '../InputForm/InputForm';
import Homepage from './Homepage';
import GeneratePdf from '../utils/GeneratePdf';
import ResignationForm from './ResignationForm/ResignationForm';
import History from '../EmployeeInfo/History';
import Status from '../Status/Status';
import NotFound from '../utils/NotFound';
import Employees from '../EmployeeInfo/Employees';
import UserHomepage from './UserHomepage';
import UserStatus from '../Status/UserStatus';
import ProfilePage from './Profile';

const UserDashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserHomepage />} />
            <Route path="/generatepdf" element={<GeneratePdf />} />
            <Route path="/resignation" element={<ResignationForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/userstatus" element={<UserStatus/>} />
            <Route path="/userstatus/:employeeId" element={<UserStatus />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default UserDashboardRoutes