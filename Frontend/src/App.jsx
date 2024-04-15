import { Route, Routes } from "react-router-dom";
import "./App.css";

// PAGES IMPORT
import IdeosPage from "./pages/IdeosPage/IdeosPage";
import AppsPage from "./pages/AppsPage/AppsPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import HomePage from "./pages/HomePage/HomePage";
// import Header from "./components/Header/Header";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="homeContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/ideos" element={<IdeosPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
