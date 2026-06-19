import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'

// Placeholder dashboards (we'll build these next)
const PatientDashboard = () => <div className="p-8"><h1 className="text-2xl font-bold text-blue-700">✅ Patient Dashboard</h1><p className="text-gray-500 mt-2">Welcome! We'll build this next.</p></div>
const GPDashboard = () => <div className="p-8"><h1 className="text-2xl font-bold text-green-700">✅ GP Dashboard</h1><p className="text-gray-500 mt-2">Welcome Doctor! We'll build this next.</p></div>
const AdminDashboard = () => <div className="p-8"><h1 className="text-2xl font-bold text-purple-700">✅ Admin Dashboard</h1><p className="text-gray-500 mt-2">Welcome Admin! We'll build this next.</p></div>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Patient routes */}
        <Route path="/patient/dashboard" element={
          <ProtectedRoute allowedRoles={['patient']}>
            <PatientDashboard />
          </ProtectedRoute>
        } />

        {/* GP routes */}
        <Route path="/gp/dashboard" element={
          <ProtectedRoute allowedRoles={['gp']}>
            <GPDashboard />
          </ProtectedRoute>
        } />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}