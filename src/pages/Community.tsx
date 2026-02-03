import { Outlet, useNavigate, useLocation } from "react-router";

const Community = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로에서 /community/ 뒤의 첫 세그먼트만 추출 (예: /community/blog/write -> blog)
  const afterCommunity = location.pathname.split("/community/")[1] ?? "blog";
  const currentSubPath = afterCommunity.split("/")[0] || "blog";

  // /community/blog/write 인 경우에는 커뮤니티 페이지 UI를 숨김
  const isWritePage = location.pathname.startsWith("/community/blog/write");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const value = e.target.value;
    navigate(`/community/${value}`);
  };

  return (
    <div>
      {!isWritePage && (
        <>
          커뮤니티 페이지
          <select value={currentSubPath} onChange={handleChange}>
            <option value="blog">블로그</option>
            <option value="news">회사소식</option>
            <option value="community">커뮤니티</option>
          </select>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Community;
