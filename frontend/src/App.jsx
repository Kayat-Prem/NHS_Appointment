import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/admin/Dashboard'
import ManageDoctors from './pages/admin/ManageDoctors'
import AdminPatients from './pages/admin/Patients'
import AdminAppointments from './pages/admin/Appointments'

const PatientDashboard = () => <div style={{ padding: '2rem' }}><h1>✅ Patient Dashboard — coming next!</h1></div>
const GPDashboard = () => <div style={{ padding: '2rem' }}><h1>✅ GP Dashboard — coming next!</h1></div>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/patient/dashboard" element={
          <ProtectedRoute allowedRoles={['patient']}><PatientDashboard /></ProtectedRoute>
        } />
        <Route path="/gp/dashboard" element={
          <ProtectedRoute allowedRoles={['gp']}><GPDashboard /></ProtectedRoute>
        } />

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
      </Routes>
    </BrowserRouter>
  )
}