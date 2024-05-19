import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthPage from "./pages/AuthPage/AuthPage";

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
        <Route path="/auth" element={<AuthPage />} />
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
