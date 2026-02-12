// @ts-nocheck
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router";

const Blog = () => {
  const [blogArticleList, setBlogArticleList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const isWritePage = location.pathname.endsWith("/write");

  async function getBlogArticleList() {
    const response = await axios.post(
      "http://localhost:5013/homepage/blog/read/list",
    );

    // console.log(response);
    console.log(response.data);

    setBlogArticleList(response.data);
  }

  useEffect(() => {
    getBlogArticleList();
  }, []);

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
          {blogArticleList.map((item) => (
            <div
              onClick={() => {
                console.dir(item);
                console.dir(item.id);

                navigate("eachDetail", { state: item.id });
              }}
            >
              {item.title}

              <br></br>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Blog;
