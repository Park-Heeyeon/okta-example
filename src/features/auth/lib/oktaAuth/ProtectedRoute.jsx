import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authState } = useOktaAuth();

  // 인증 상태 확인 중 (초기 로딩 단계)
  if (!authState) {
    return <div>로딩 중...</div>;
  }

  // 인증되지 않았으면 로그인 페이지로 이동
  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 인증됨 → 자식 컴포넌트 렌더링
  return children;
};

export default ProtectedRoute;
