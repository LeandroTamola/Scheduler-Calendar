import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "../hocs/RequireAuth";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { MainRoutes };
