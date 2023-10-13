
import { Route, Routes } from 'react-router-dom';
import GeneratePdf from '../utils/GeneratePdf';
import ResignationForm from './ResignationForm/ResignationForm';
import History from '../EmployeeInfo/History';
import NotFound from '../utils/NotFound';
import Employees from '../EmployeeInfo/Employees';
import AdminHomepage from './AdminHomepage';
import AdminStatus from '../Status/AdminStatus';
import ProfilePage from './Profile';


const AdminDashboardRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/" element={<AdminHomepage />} />
            <Route path="/generatepdf" element={<GeneratePdf />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/adminstatus/:employeeId" element={<AdminStatus />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/termination" element={<ResignationForm />} />
        </Routes>
    );
}

export default AdminDashboardRoutes