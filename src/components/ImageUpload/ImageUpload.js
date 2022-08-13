import React from "react";
import { Wrapper } from "./ImageUpload.style";
import { useEffect, useState } from "react";

const ImageUpload = () => {
    const [book_Img, setBookImg] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        const BookItem = {
          book_Img
        };
    }
  return (
    <Wrapper>
      <form
        action='action="http://192.168.1.15:8080/file/upload"
            method="post"
            encType="multipart/form-data"'
      >
        <input
          type="file"
          onChange={(e) => setBookImg(e.target.files[0])}
          style={{
            height: 60,
            width: 250,
            fontSize: 20,
            marginLeft: 50,
            marginTop: 30,
          }}
        ></input>
      </form>
      <input type="button" onClick={handleClick} value="提交"></input>
    </Wrapper>
  );
};

export default ImageUpload;
