import { Outlet, useNavigate, useLocation } from "react-router";

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWritePage = location.pathname.endsWith("/write");

  return (
    <div>
      {!isWritePage && (
        <div>
          블로그 페이지
          <button
            type="button"
            onClick={() => {
              navigate("write");
            }}
          >
            글쓰기
          </button>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Blog;
