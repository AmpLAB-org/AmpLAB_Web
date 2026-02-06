// @ts-nocheck
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";

const Blog = () => {
  const [blogArticleList, setBlogArticleList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const isWritePage = location.pathname.endsWith("/write");

  async function getBlogArticleList() {
    const response = await axios.post(
      "http://localhost:5013/homepage/blog/read/list",
    );

    console.log(response);
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
            <div>
              {item.title}

              <br></br>

              {item.content}

              {item.addedFileNameList.map((file) => (
                <div>
                  {file}

                  <img src={"http://localhost:5013/uploads/" + file}></img>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Blog;
