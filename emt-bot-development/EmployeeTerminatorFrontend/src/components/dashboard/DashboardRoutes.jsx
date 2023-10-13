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
import AdminHomepage from './AdminHomepage';

const DashboardRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/userhomepage" element={<UserHomepage />} />
            <Route path="/adminhomepage" element={<AdminHomepage />} />
            <Route path="/addemployee" element={<InputForm />} />
            <Route path="/generatepdf" element={<GeneratePdf />} />
            <Route path="/resignation" element={<ResignationForm />} />
            <Route path="/history" element={<History />} />
            <Route path="/status" element={<Status />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/employees" element={<Employees />} />
        </Routes>
    );
};

export default DashboardRoutes;
