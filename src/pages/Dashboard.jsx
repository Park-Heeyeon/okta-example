import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    oktaAuth.getUser().then((info) => {
      setUserInfo(info);
    });
  }, [oktaAuth]);

  const handleLogout = async () => {
    await oktaAuth.signOut();
    navigate("/login");
  };

  return (
    <div className="dash-container">
      <header className="dash-header">
        <h1 className="dash-title">환영합니다, {userInfo?.name}님</h1>
        <button className="dash-logout" onClick={handleLogout}>
          로그아웃
        </button>
      </header>

      <section className="dash-content">
        <div className="dash-card">
          <h3>계정 정보</h3>
          <p>이메일: {userInfo?.email}</p>
          <p>이름: {userInfo?.name}</p>
        </div>

        <div className="dash-card">
          <h3>알림</h3>
          <p>현재 Okta 인증으로 로그인 중입니다.</p>
        </div>

        <div className="dash-card">
          <h3>Quick Menu</h3>
          <button className="dash-btn">프로필 설정</button>
          <button className="dash-btn">서비스 메뉴</button>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
