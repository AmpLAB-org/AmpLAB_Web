// @ts-nocheck
import axios from "axios";
// axios import 해야함

import { useState, useEffect } from "react";

function WriteBlog() {
  async function uploadBlogPost() {
    const formDataForBlog = new FormData();

    console.log(document.getElementById("uploadimageinblog"));
    console.log(document.getElementById("uploadimageinblog").files);
    console.log(document.getElementById("uploadimageinblog").files[0]);

    formDataForBlog.append(
      "nameformulter",
      document.getElementById("uploadimageinblog").files[0]
    );

    await axios.post(
      "http://localhost:5013/homepage/blog/upload",
      formDataForBlog
    );
  }

  return (
    <div>
      블로그 글쓰기 페이지
      <input />
      <input type="file" id="uploadimageinblog" name="nameformulter" />
      <textarea />
      <button type="button" onClick={uploadBlogPost}>
        완료
      </button>
    </div>
  );
}

export default WriteBlog;
