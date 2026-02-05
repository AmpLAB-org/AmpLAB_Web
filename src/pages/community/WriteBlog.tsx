// @ts-nocheck
import axios from "axios";
import { useState, useRef } from "react";

function WriteBlog() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [blogArticleTitle, setBlogArticleTitle] = useState("");
  const [blogArticleTextContent, setBlogArticleTextContent] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files;
    if (!chosen?.length) return;
    const newFiles = Array.from(chosen);
    setSelectedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = ""; // 같은 input으로 다시 선택해 추가할 수 있게 비움
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  async function uploadBlogPost() {
    console.log(selectedFiles);
    console.log(blogArticleTitle);
    console.log(blogArticleTextContent);

    const formDataForBlog = new FormData();
    selectedFiles.forEach((file) => {
      formDataForBlog.append("nameformulter", file);
    });

    formDataForBlog.append("id", "wefwafwaefawe");
    formDataForBlog.append("title", blogArticleTitle);
    formDataForBlog.append("content", blogArticleTextContent);

    console.dir(formDataForBlog);

    await axios.post(
      "http://localhost:5013/homepage/blog/upload",
      formDataForBlog,
    );
  }

  return (
    <div>
      블로그 글쓰기 페이지
      <input
        type="text"
        value={blogArticleTitle}
        onChange={(e) => {
          e.stopPropagation();

          console.log(e.currentTarget.value);

          setBlogArticleTitle(e.currentTarget.value);
        }}
      />
      <input
        ref={fileInputRef}
        type="file"
        id="uploadimageinblog"
        name="nameformulter"
        multiple
        onChange={handleFileChange}
      />
      {selectedFiles.length > 0 && (
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={`${file.name}-${index}`}>
              {file.name}
              <button type="button" onClick={() => removeFile(index)}>
                제거
              </button>
            </li>
          ))}
        </ul>
      )}
      <br></br>
      <br></br>
      <textarea
        value={blogArticleTextContent}
        onChange={(e) => {
          e.stopPropagation();

          console.log(e.currentTarget.value);

          setBlogArticleTextContent(e.currentTarget.value);
        }}
        style={{
          minHeight: "1600px",
          minWidth: "800px",
        }}
      />
      <button type="button" onClick={uploadBlogPost}>
        완료
      </button>
    </div>
  );
}

export default WriteBlog;
