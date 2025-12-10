const oktaConfig = {
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID, // Okta 애플리케이션 클라이언트 ID
  issuer: import.meta.env.VITE_OKTA_ISSUER, // 인증 서버 URL
  redirectUri: import.meta.env.VITE_OKTA_REDIRECT_URI, // 인증 후 리디렉션 URI
  scopes: ["openid", "profile", "email"], // 요청할 권한 범위
  pkce: true, // spa 보안 강화
  disableHttpsCheck: import.meta.env.DEV, // 개발환경에서 Https 체크 비활성화
};
export default oktaConfig;
