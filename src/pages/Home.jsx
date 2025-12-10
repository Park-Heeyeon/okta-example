import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/dashboard");
    } else if (authState?.isAuthenticated === false) {
      navigate("/login");
    }
    // authState가 null이면 로딩 중이므로 대기
  }, [authState, navigate]);

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">인증 상태 확인 중...</p>
    </div>
  );
};
export default Home;
