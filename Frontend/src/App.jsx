import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";

// PAGES IMPORT
import IdeosPage from "./pages/IdeosPage/IdeosPage";
import AppsPage from "./pages/AppsPage/AppsPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import HomePage from "./pages/HomePage/HomePage";
// import Header from "./components/Header/Header";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="homeContainer">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute path="/">
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apps"
          element={
            <ProtectedRoute path="/apps">
              <AppsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute path="/analytics">
              <AnalyticsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute path="/notifications">
              <NotificationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ideos"
          element={
            <ProtectedRoute path="/ideos">
              <IdeosPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute path="/settings">
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
        <Route
          path="/auth/:path"
          element={
            <ProtectedRoute path="/auth">
              <AuthPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        style={{
          fontSize: "1rem",
        }}
        hideProgressBar={true}
        newestOnTop={false}
        theme="dark"
        toastStyle={{
          boxShadow: "0 0 10px 0px #000000",
        }}
        autoClose={3000}
      />
    </div>
  );
}

export default App;
