import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../pages";
import SportsPage from "../pages/sportsPage";
import ContactUsPage from "../pages/ContactUsPage";

import AddvaccancyPage from "../pages/admin/AddvaccancyPage";
import EditVaccancyPage from "../pages/admin/EditVaccancyPage";
import ApplicantlistPage from "../pages/admin/ApplicantlistPage";
import ApplicantslistsPage from "../pages/admin/ApplicantslistsPage";
import CareerListPage from "../pages/admin/CareerListPage.tsx";
import CareerDetailPage from "../pages/admin/CareerDetailPage.tsx";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sports" element={<SportsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />


      <Route path="/admin/add-vaccancy" element={<AddvaccancyPage />} />
      <Route path="/admin/edit-vaccancy/:id" element={<EditVaccancyPage />} />
      <Route path="/admin/applicants" element={<ApplicantslistsPage />} />
      <Route path="/admin/applicants/:id" element={<ApplicantlistPage />} />
      <Route path="/admin/careers" element={<CareerListPage />} />
      <Route path="/admin/career/:id" element={<CareerDetailPage />} />


      <Route element={<ProtectedRoute />}>
        {/* All protected routes should be here */}

        {/* <Route path="/profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
