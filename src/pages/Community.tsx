import { Outlet, useNavigate, useLocation } from "react-router";

const Community = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로에서 하위 경로만 추출 (예: /community/blog -> blog)
  const currentSubPath = location.pathname.split("/community/")[1] ?? "blog";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const value = e.target.value;
    navigate(`/community/${value}`);
  };

  return (
    <div>
      커뮤니티 페이지
      <select value={currentSubPath} onChange={handleChange}>
        <option value="blog">블로그</option>
        <option value="news">회사소식</option>
        <option value="community">커뮤니티</option>
      </select>
      <Outlet />
    </div>
  );
};

export default Community;
