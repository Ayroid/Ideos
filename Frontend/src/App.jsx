import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// COMPONENTS IMPORT
import Navigation from "./components/Navigation/Navigation";

// PAGES IMPORT
import IdeosPage from "./pages/IdeosPage/IdeosPage";
import AppsPage from "./pages/AppsPage/AppsPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  const [activeNavigationState, setActiveNavigationState] = useState("home");

  const updateNavigation = (navLink) => {
    if (navLink === activeNavigationState) {
      return;
    }
    setActiveNavigationState(navLink);
  };

  return (
    <div className="homeContainer">
      <Header
        activeNavigationState={activeNavigationState}
        updateNavigation={updateNavigation}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/ideos" element={<IdeosPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Navigation
        activeNavigationState={activeNavigationState}
        updateNavigation={updateNavigation}
      />
    </div>
  );
}

export default App;
