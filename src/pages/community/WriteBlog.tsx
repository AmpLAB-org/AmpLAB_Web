// @ts-nocheck
import axios from "axios";
import { useState, useRef } from "react";

// console.log(crypto);
// const randomUuid = crypto.randomUUID();
// console.log(randomUuid);

function WriteBlog() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [blogArticleTitle, setBlogArticleTitle] = useState("");
  const [blogArticleTextContent, setBlogArticleTextContent] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files;
    if (!chosen?.length) return;

    const newFiles = Array.from(chosen);

    console.log(e.target.files);

    for (let icIdx = 0; icIdx < e.target.files.length; icIdx++) {
      if (icIdx < e.target.files.length) {
        const reader = new FileReader();

        function handleFileReaderLoad(loadEvent) {
          console.log(loadEvent);
          loadEvent.stopPropagation();

          reader.removeEventListener("load", handleFileReaderLoad);

          // 1. 현재 selection / range 구하기
          const selection = window.getSelection();
          if (!selection || selection.rangeCount === 0) return;

          const range = selection.getRangeAt(0);

          // const imageSpecifyerAtStart = document.createTextNode(
          //   "············|·|·|·|·|············",
          // );

          // const imageSpecifyerAtEnd = document.createTextNode(
          //   "············|·|·|·|·|············",
          // );

          // 2. <img> 노드 생성
          const img = document.createElement("img");
          img.src = reader.result; // 여기서는 data URL 사용 (실제로는 업로드 후 URL 사용)

          // range.insertNode(imageSpecifyerAtStart);

          // 3. 현재 커서 위치에 노드 삽입
          range.insertNode(img);

          // range.insertNode(imageSpecifyerAtEnd);

          // 4. 이미지 뒤에 커서 위치를 다시 세팅 (선택 범위 정리)
          range.setStartAfter(img);
          range.setEndAfter(img);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        reader.addEventListener("load", handleFileReaderLoad);

        // const timeStamp = Date.now();
        // const timeSeed = String(timeStamp);
        // const temporalIndex = String(0) + String(0) + String(0);
        // const temporalAindex = String(1) + String(1) + String(1);
        // console.log(temporalIndex);
        // console.log(temporalAindex);
        // const secondSeed = temporalIndex + timeSeed + temporalIndex;
        // const thirdSeed = temporalAindex + timeSeed + temporalAindex;
        // console.log(timeSeed);
        // console.log(secondSeed);
        // console.log(thirdSeed);
        // const compareResult = window.btoa(timeSeed);
        // const compareSecond = window.btoa(secondSeed);
        // const compareThird = window.btoa(thirdSeed);
        // console.log(compareResult);
        // console.log(compareSecond);
        // console.log(compareThird);

        reader.readAsDataURL(e.target.files[icIdx]);
      } else if (icIdx === e.target.files.length) {
        setSelectedFiles((prev) => [...prev, ...newFiles]);
        e.target.value = ""; // 같은 input으로 다시 선택해 추가할 수 있게 비움
      }
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  async function uploadBlogPost() {
    const formDataForBlog = new FormData();

    formDataForBlog.append("temporalKeyToSave", "nnjjnjjijiji877788");

    console.log(selectedFiles);
    console.log(blogArticleTitle);
    console.log(blogArticleTextContent);

    formDataForBlog.append("id", "wefwafwaefawe");
    formDataForBlog.append("title", blogArticleTitle);
    formDataForBlog.append("content", blogArticleTextContent);

    // const formDataForBlog = new FormData();
    selectedFiles.forEach((file) => {
      formDataForBlog.append("nameformulter", file);
    });

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
      {/* <textarea
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
      /> */}
      <div
        id="editor"
        contentEditable="true"
        style={{
          minHeight: "1300px",
        }}
      ></div>
      <button type="button" onClick={uploadBlogPost}>
        완료
      </button>
    </div>
  );
}

export default WriteBlog;
