import OktaAuth from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import oktaConfig from "../oktaConfig";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./features/auth/lib/oktaAuth/ProtectedRoute";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  // Okta 인증(로그인) 후 원래 가려던 페이지로 되돌려주는 역할을 하는 콜백 함수
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    window.location.replace(originalUri || "/");
  };

  return (
    <Router>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Security>
    </Router>
  );
}

export default App;
