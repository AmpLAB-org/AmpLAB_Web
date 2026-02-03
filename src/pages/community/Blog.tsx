import { Outlet, useNavigate } from "react-router";

const Blog = () => {
  const navigate = useNavigate();

  return (
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
      <Outlet />
    </div>
  );
};

export default Blog;
