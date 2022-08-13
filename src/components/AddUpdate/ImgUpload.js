import React,{useState} from "react";
import ImageUploading from "react-images-uploading";
import { Wrapper } from "./ImgUpload.style";

function ImgUpload() {
  // const [book_Img, setBook_Img] = useState("");
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const BookImg = {
  //      book_Img,
  //   };
  // }
  //     //数据提交地址
  //     fetch("http://localhost:8080/file/upload", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(book_Img),
  //     }).then(() => {
  //       // alert('数据提交成功！')
  //       console.log(book_Img);
  //     });
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Wrapper>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        // onChange={(e) => setBook_Img(e.target.files[0])}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          // onImageUpdate,
          // onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="200" />
                {/* <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div> */}
              </div>
            ))}
            <div id="button">
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                上传
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>移除</button>
            </div>
          </div>
        )}
      </ImageUploading>
    </Wrapper>
  );
}

export default ImgUpload;
// import React from "react";
// import Http from "./http";

// const URL = "http://localhost:8080/file/upload";

// export default class ImgUpload extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       uploadedFile: "",
//       uploadedFileGetUrl: "",
//     };
//   }

//   error() {
//     alert("error");
//   }

//   callback(result) {
//     this.setState({
//       uploadedFile: result.uploadedFile,
//       uploadedFileGetUrl: result.uploadedFileGetUrl,
//     });
//   }

//   handleImageUpload(e) {
//     e.preventDefault();
//     let file = e.target;
//     Http.post(URL, file, this.callback.bind(this), this.error);
//   }

//   render() {
//     return (
//       <div>
//         <input type="file" onChange={this.handleImageUpload.bind(this)} />
//         <div>
//           {this.state.uploadedFileGetUrl === "" ? null : (
//             <div>
//               <p>{this.state.uploadedFile}</p>
//               <img src={this.state.uploadedFileGetUrl} alt="你选择的图片" />
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

