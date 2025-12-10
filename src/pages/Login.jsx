import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  // 이미 로그인이 되어있는 경우 대시보드 페이지로 이동
  if (authState?.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleOktaTest = async () => {
    // Okta 호스팅 로그인 페이지로 리다이렉션
    await oktaAuth.signInWithRedirect();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome</h2>
        <p className="login-sub">로그인을 진행해주세요</p>

        <button className="login-button" onClick={handleOktaTest}>
          Okta 로그인
        </button>
      </div>
    </div>
  );
};
export default Login;
