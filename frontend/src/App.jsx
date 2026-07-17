import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import ProtectedRoute from './components/ProtectedRoute'

// Landing Pages
import AboutService from './LandingPages/AboutService'
import ContactUs from './LandingPages/ContactUs'
import NHSpolicy from './LandingPages/NHSpolicy'
import PrivacyPolicy from './LandingPages/PrivacyPolicy'
import TermsOfUse from './LandingPages/TermsOfUse'
import CookiePolicy from './LandingPages/CookiePolicy'
import NhsService from './LandingPages/NhsService'
import WhenToSeeGP from './Landingpages/WhenToSeeGP'
import CommonConditions from './LandingPages/CommonConditions'
import HealthyLiving from './LandingPages/HealthyLiving'
import MentalHealth from './LandingPages/MentalHealth'
import Prescriptions from './LandingPages/Prescriptions'

// Admin pages
import AdminDashboard from './pages/admin/Dashboard'
import ManageDoctors from './pages/admin/ManageDoctors'
import AdminPatients from './pages/admin/Patients'
import AdminAppointments from './pages/admin/Appointments'

// Patient pages
import PatientDashboard from './pages/patient/Dashboard'
import BookAppointment from './pages/patient/BookAppointment'
import MyAppointments from './pages/patient/MyAppointments'
import PatientProfile from './pages/patient/Profile'

// GP pages
import GPDashboard from './pages/gp/Dashboard'
import ManageSlots from './pages/gp/ManageSlots'
import GPSchedule from './pages/gp/Schedule'
import GPPatients from './pages/gp/Patients'

// Forgot & Reset Password
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Landing Pages */}
        <Route path="/about" element={<AboutService />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/nhs-policy" element={<NHSpolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/NhsService" element={<NhsService />} />
        <Route path="/when-to-see-gp"     element={<WhenToSeeGP />} />
        <Route path="/common-conditions"  element={<CommonConditions />} />
        <Route path="/mental-health"  element={<MentalHealth />} />
        <Route path="/healthy-living"  element={<HealthyLiving />} />
        <Route path="/precriptions"  element={<Prescriptions />} />

        {/* Patient */}
        <Route path="/patient/dashboard" element={
          <ProtectedRoute allowedRoles={['patient']}><PatientDashboard /></ProtectedRoute>
        } />
        <Route path="/patient/book" element={
          <ProtectedRoute allowedRoles={['patient']}><BookAppointment /></ProtectedRoute>
        } />
        <Route path="/patient/appointments" element={
          <ProtectedRoute allowedRoles={['patient']}><MyAppointments /></ProtectedRoute>
        } />
        <Route path="/patient/profile" element={
          <ProtectedRoute allowedRoles={['patient']}><PatientProfile /></ProtectedRoute>
        } />

        {/* GP */}
        <Route path="/gp/dashboard" element={
          <ProtectedRoute allowedRoles={['gp']}><GPDashboard /></ProtectedRoute>
        } />
        <Route path="/gp/slots" element={
          <ProtectedRoute allowedRoles={['gp']}><ManageSlots /></ProtectedRoute>
        } />
        <Route path="/gp/schedule" element={
          <ProtectedRoute allowedRoles={['gp']}><GPSchedule /></ProtectedRoute>
        } />
        <Route path="/gp/patients" element={
          <ProtectedRoute allowedRoles={['gp']}><GPPatients /></ProtectedRoute>
        } />

        {/* Admin */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>
        } />
        <Route path="/admin/doctors" element={
          <ProtectedRoute allowedRoles={['admin']}><ManageDoctors /></ProtectedRoute>
        } />
        <Route path="/admin/patients" element={
          <ProtectedRoute allowedRoles={['admin']}><AdminPatients /></ProtectedRoute>
        } />
        <Route path="/admin/appointments" element={
          <ProtectedRoute allowedRoles={['admin']}><AdminAppointments /></ProtectedRoute>
        } />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
      </Routes>
    </BrowserRouter>
  )
}