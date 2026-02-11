// @ts-nocheck
import axios from "axios";
import { useState, useEffect, useRef } from "react";

// console.log(crypto);
// const randomUuid = crypto.randomUUID();
// console.log(randomUuid);

function WriteBlog() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const blogWriteEditorRef = useRef(null);
  const [blogArticleTitle, setBlogArticleTitle] = useState("");
  const [blogArticleTextContent, setBlogArticleTextContent] = useState("");
  const [fileNameListForServer, setFileNameListForServer] = useState([]);
  // const [preventAsyncIssue, setPreventAsyncIssue] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files;
    if (!chosen?.length) return;

    const newFiles = Array.from(chosen);

    const timeStamp = Date.now();
    const timeSeed = String(timeStamp);

    let arrayForFileName = [];

    console.log(e.target.files);

    console.log(timeSeed);

    for (let icIdx = 0; icIdx <= e.target.files.length; icIdx++) {
      if (icIdx < e.target.files.length) {
        console.dir(e.target.files[icIdx].name);
        console.dir(e.target.files[icIdx].type);

        const reader = new FileReader();

        const temporalIndex =
          String(icIdx + 1) + String(icIdx + 1) + String(icIdx + 1);

        console.log(temporalIndex);

        const secondSeed = temporalIndex + timeSeed + temporalIndex;

        console.log(secondSeed);

        const compareSecond = window.btoa(secondSeed);

        console.log(compareSecond);

        function handleFileReaderLoad(loadEvent) {
          console.log(loadEvent);
          loadEvent.stopPropagation();

          reader.removeEventListener("load", handleFileReaderLoad);

          // 1. 현재 selection / range 구하기
          const selection = window.getSelection();
          if (!selection || selection.rangeCount === 0) return;

          const range = selection.getRangeAt(0);

          // 2. <img> 노드 생성
          const img = document.createElement("img");
          img.src = reader.result; // 여기서는 data URL 사용 (실제로는 업로드 후 URL 사용)

          img.id = compareSecond;

          // 3. 현재 커서 위치에 노드 삽입
          range.insertNode(img);

          // 4. 이미지 뒤에 커서 위치를 다시 세팅 (선택 범위 정리)
          range.setStartAfter(img);
          range.setEndAfter(img);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        reader.addEventListener("load", handleFileReaderLoad);

        const extDotIndex = e.target.files[icIdx].name.lastIndexOf(".");

        const extName = e.target.files[icIdx].name.substring(extDotIndex);

        console.log(extName);

        const fileNameToSaveInServer = compareSecond + extName;

        arrayForFileName.push({
          originalName: e.target.files[icIdx].name,
          id: compareSecond,
          fullName: fileNameToSaveInServer,
          extName: extName,
        });

        reader.readAsDataURL(e.target.files[icIdx]);
      } else if (icIdx === e.target.files.length) {
        setSelectedFiles((prev) => [...prev, ...newFiles]);
        e.target.value = ""; // 같은 input으로 다시 선택해 추가할 수 있게 비움

        setFileNameListForServer((prev) => [...prev, ...arrayForFileName]);
      }
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  function checkInnerContentInEditor() {
    console.dir(selectedFiles);
    console.dir(fileNameListForServer);
    // console.dir(blogWriteEditorRef.current.outerHTML);

    const allContentListInEditor = blogWriteEditorRef.current.childNodes;

    let allOuterhtmlInEditor = "";

    for (let i = 0; i <= allContentListInEditor.length; i++) {
      if (i < allContentListInEditor.length) {
        console.dir(allContentListInEditor[i].nodeName);

        if (allContentListInEditor[i].nodeType === 3) {
          // outerHTML을 더해야하는 경우에 해당

          // console.dir(allContentListInEditor[i].data);
          // 모든 " "를 "&nbsp; "으로 바꿔야함
          const realOuterhtml = allContentListInEditor[i].data.replaceAll(
            " ",
            "&nbsp; ",
          );

          console.dir(realOuterhtml);

          // allOuterhtmlInEditor = allOuterhtmlInEditor + realOuterhtml;
        } else if (allContentListInEditor[i].nodeType === 1) {
          console.log("html element인지 확인");
          console.log(allContentListInEditor[i]);

          // console.dir(allContentListInEditor[i].outerHTML);
          console.dir(allContentListInEditor[i].children);

          if (allContentListInEditor[i].nodeName === "IMG") {
            // 자기 자신이 <img /> 요소이므로,
            // outerHTML을 더해야하는 경우에 해당

            const sameSrcObj = fileNameListForServer.filter(
              (item) => item.id === blogWriteEditorRef.current.childNodes[i].id,
            )[0];
            // sameSrcObj.fullName

            console.dir(sameSrcObj);

            blogWriteEditorRef.current.childNodes[i].src =
              "http://localhost:5013/uploads/" + sameSrcObj.fullName;

            blogWriteEditorRef.current.childNodes[i].setAttribute(
              "src",
              "http://localhost:5013/uploads/" + sameSrcObj.fullName,
            );

            console.dir(blogWriteEditorRef.current.childNodes[i].id);
            console.dir(blogWriteEditorRef.current.childNodes[i].src);
            // console.log(blogWriteEditorRef.current.childNodes[i].outerHTML);

            // allOuterhtmlInEditor =
            //   allOuterhtmlInEditor +
            //   document.getElementById("editor").childNodes[i].outerHTML;
          } else if (
            allContentListInEditor[i].children &&
            allContentListInEditor[i].children.length > 0
          ) {
            console.log("children에 자식 요소가 존재함");

            // [i].children 배열에 img가 포함되어있는지, 아닌지 구분
            for (
              let j = 0;
              j <= allContentListInEditor[i].children.length;
              j++
            ) {
              if (j < allContentListInEditor[i].children.length) {
                // console.log(allContentListInEditor[i].children[j]);
                console.log(allContentListInEditor[i].children[j].nodeName);

                if (allContentListInEditor[i].children[j].nodeName === "IMG") {
                  // console.log(allContentListInEditor[i].children[j].src);

                  const sameSrcObjInChild = fileNameListForServer.filter(
                    (item) =>
                      item.id ===
                      blogWriteEditorRef.current.childNodes[i].children[j].id,
                  )[0];

                  console.dir(sameSrcObjInChild);

                  blogWriteEditorRef.current.childNodes[i].children[j].src =
                    "http://localhost:5013/uploads/" +
                    sameSrcObjInChild.fullName;

                  blogWriteEditorRef.current.childNodes[i].children[
                    j
                  ].setAttribute(
                    "src",
                    "http://localhost:5013/uploads/" +
                      sameSrcObjInChild.fullName,
                  );

                  console.dir(
                    blogWriteEditorRef.current.childNodes[i].children[j].id,
                  );

                  console.log(
                    blogWriteEditorRef.current.childNodes[i].children[j]
                      .outerHTML,
                  );

                  // allOuterhtmlInEditor =
                  //   allOuterhtmlInEditor +
                  //   document.getElementById("editor").childNodes[i].children[j]
                  //     .outerHTML;
                } else {
                  // children에 자식 요소가 존재하지만, img가 아닌 경우
                }
              } else if (j === allContentListInEditor[i].children.length) {
                // allContentListInEditor[i]의 outerHTML을 더해야하는 경우에 해당
                // allOuterhtmlInEditor =
                //   allOuterhtmlInEditor + allContentListInEditor[i].outerHTML;
              }
            }
          } else {
            // 자식 요소가 존재하지 않고, img가 아니므로,
            // outerHTML을 더해야하는 경우에 해당
            // allOuterhtmlInEditor =
            //   allOuterhtmlInEditor + allContentListInEditor[i].outerHTML;
          }
        } else {
          // 이 경우에는 아무것도 더하지 않는다
        }
      } else if (i === allContentListInEditor.length) {
        console.dir(document.getElementById("editor").innerHTML);
        allOuterhtmlInEditor = document.getElementById("editor").innerHTML;

        console.dir(allOuterhtmlInEditor);
        setBlogArticleTextContent(allOuterhtmlInEditor);
      }
    }
  }

  async function uploadBlogPost() {
    const formDataForBlog = new FormData();

    formDataForBlog.append("content", blogArticleTextContent);
    formDataForBlog.append("temporalKeyToSave", fileNameListForServer);

    console.dir(selectedFiles);
    console.log(blogArticleTitle);
    console.dir(blogArticleTextContent);

    formDataForBlog.append("id", "wefwafwaefawe");
    formDataForBlog.append("title", blogArticleTitle);

    selectedFiles.forEach((file) => {
      const sameFileName = fileNameListForServer.filter(
        (eachFileName) => eachFileName.originalName === file.name,
      )[0];

      console.dir(sameFileName);
      console.dir(sameFileName.fullName);

      formDataForBlog.append("nameformulter", file, sameFileName.fullName);
    });

    console.dir(formDataForBlog);

    await axios.post(
      "http://localhost:5013/homepage/blog/upload",
      formDataForBlog,
    );
  }

  // blogArticleTextContent

  useEffect(() => {
    console.log(blogArticleTextContent);
    if (blogArticleTextContent != "") {
      uploadBlogPost();
    }
  }, [blogArticleTextContent]);

  // fileNameListForServer

  useEffect(() => {
    console.log(fileNameListForServer);
  }, [fileNameListForServer]);

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
      <div
        ref={blogWriteEditorRef}
        id="editor"
        contentEditable="true"
        style={{
          minHeight: "1300px",
        }}
      ></div>
      <button
        type="button"
        onClick={() => {
          checkInnerContentInEditor();
        }}
      >
        완료
      </button>
    </div>
  );
}

export default WriteBlog;
