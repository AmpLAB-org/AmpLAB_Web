// @ts-nocheck
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const blogEachDetailContentRef = useRef(null);

  const blogId = location.state;

  useEffect(() => {
    console.log(location.state);
    console.log(blogId);
  }, []);

  useEffect(() => {
    if (!blogId) {
      // ID가 없으면 블로그 페이지로 돌아가기
      navigate("/community/blog");
      return;
    }

    async function getBlogDetail() {
      try {
        const response = await axios.post(
          `http://localhost:5013/homepage/blog/read/each`,
          { id: blogId },
        );

        console.log("Blog Detail:", response.data);
        setBlogDetail(response.data);

        // console.log(blogEachDetailContentRef);
        console.log(blogEachDetailContentRef.current);
        // console.log(blogEachDetailContentRef.current.innerHTML);
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      } finally {
        setLoading(false);
      }
    }

    getBlogDetail();
  }, [blogId, navigate]);

  // if (loading) {
  //   return <div>로딩 중...</div>;
  // }

  // if (!blogDetail) {
  //   return <div>블로그 글을 찾을 수 없습니다.</div>;
  // }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          navigate("/community/blog");
        }}
      >
        돌아가기
      </button>

      {loading ? (
        <div>로딩 중...</div>
      ) : blogDetail ? (
        <>
          <h1>{blogDetail.title}</h1>
          <div>작성자: {blogDetail.author}</div>
          <div>작성일: {blogDetail.createdAt}</div>
          <hr />

          <div
            ref={blogEachDetailContentRef}
            id="vieweditor"
            // contentEditable="true"
            style={{
              minHeight: "1300px",
            }}
            dangerouslySetInnerHTML={{ __html: blogDetail.content }}
          ></div>

          {blogDetail.addedFileNameList &&
            blogDetail.addedFileNameList.length > 0 && (
              <div>
                <h3>첨부 이미지</h3>
                {blogDetail.addedFileNameList.map((file) => (
                  <div key={file}>
                    <img
                      src={"http://localhost:5013/uploads/" + file}
                      alt={file}
                    />
                  </div>
                ))}
              </div>
            )}
        </>
      ) : (
        <div>블로그 글을 찾을 수 없습니다.</div>
      )}
    </div>
  );
};

export default BlogDetail;
