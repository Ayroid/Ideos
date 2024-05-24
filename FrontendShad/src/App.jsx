import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

import AuthPage from "./pages/AuthPage/AuthPage";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="bg-background text-foreground dark:bg-background dark:text-foreground h-screen w-screen flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-3xl font-bold">Welcome to the Home Page!</div>
          }
        />
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
        <Route
          path="/auth/login"
          element={
            <ProtectedRoute path="/auth">
              <AuthPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
