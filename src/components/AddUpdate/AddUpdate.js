import React, { useEffect, useState } from "react";
import { Wrapper } from "./AddUpdate.style";
import { Upload, Button, message } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadOutlined, StarOutlined } from "@ant-design/icons";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as BsIcon from "react-icons/bs";
import * as AiIcon from "react-icons/ai";
import { Input } from "antd";
const { TextArea } = Input;
const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const AddUpdate = () => {
  const [book_name, setbook_name] = useState("");
  const [book_writer, setbook_writer] = useState("");
  const [book_price, setbook_price] = useState("");
  const [book_info, setbook_info] = useState("");
  const [book_storage, setbook_storage] = useState("");
  const [book_img, setBookImg] = useState();
  const [type_name, settype_name] = useState("");
  // const [bookDetails, setBookDetails] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    const BookItem = {
      book_name,
      book_img,
      book_info,
      book_price,
      book_storage,
      book_writer,
      type_name,
    };

    //数据提交地址
    fetch("http://192.168.1.15:8080/bookitem/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(BookItem),
    }).then(() => {
      alert("上架成功！");
      // console.log(BookItem);
    });
  };
  return (
    <Wrapper>
      <div id="content">
        <div id="title">
          <strong>请输入图书名称：</strong>
        </div>
        <input
          required
          id="form"
          type="text"
          value={book_name}
          onChange={(e) => setbook_name(e.target.value)}
        ></input>
      </div>
      <div id="writer">
        <div id="title">
          <strong>请输入作者名称：</strong>
        </div>
        <input
          required
          id="form"
          type="text"
          value={book_writer}
          onChange={(e) => setbook_writer(e.target.value)}
        ></input>
      </div>
      <div id="type">
        <div id="title">
          <strong>请选择图书类型：</strong>
        </div>
        <input
          // id="space-holder2"
          required
          style={{ height: 60, width: 350, marginLeft: 50, fontSize: 20 }}
          type="test"
          list="typelist"
          placeholder="请选择"
          value={type_name}
          onChange={(e) => settype_name(e.target.value)}
        ></input>
        <datalist id="typelist">
          <option>全球热门畅销书</option>
          <option>店铺热门推荐</option>
          <option>2021年度榜单</option>
          <option>2022年度榜单</option>
          {/* <option>最新出版上架</option> */}
        </datalist>
      </div>
      <div id="info">
        <div id="title">
          <strong>请输入图书简介：</strong>
        </div>
        <textarea
          required
          id="info-area"
          value={book_info}
          onChange={(e) => setbook_info(e.target.value)}
        ></textarea>
      </div>
      <div id="price">
        <div id="title">
          <strong>请输入图书价格：</strong>
        </div>
        <input
          type="number"
          placeholder="1.00"
          step="0.01"
          min="0"
          max="100"
          id="number"
          value={book_price}
          onChange={(e) => setbook_price(e.target.value)}
        ></input>
        {/* <AiIcon.AiFillPlusSquare
          style={{ color: "#71C3FA", height: 60, width: 60,marginTop:10,marginLeft:50 }}
        />
        <input style={{height:50,width:100,marginTop:15,marginLeft:25,backgroundColor:"#E0EEF7",fontSize:18,fontWeight:90}}></input>
        <AiIcon.AiFillMinusSquare
           style={{ color: "#71C3FA", height: 60, width: 60,marginTop:10,marginLeft:25 }}
        /> */}
      </div>
      <div id="storage">
        <div id="title">
          <strong>请输入库存量：</strong>
        </div>
        <input
          required
          type="number"
          placeholder="0"
          step="1.0"
          min="0"
          max="10000"
          id="number"
          value={book_storage}
          onChange={(e) => setbook_storage(e.target.value)}
        ></input>
        {/* <AiIcon.AiFillPlusSquare
          style={{ color: "#71C3FA", height: 60, width: 60,marginTop:10,marginLeft:50 }}
        />
        <input style={{height:50,width:100,marginTop:15,marginLeft:25,backgroundColor:"#E0EEF7",fontSize:18,fontWeight:90}}></input>
        <AiIcon.AiFillMinusSquare
           style={{ color: "#71C3FA", height: 60, width: 60,marginTop:10,marginLeft:25 }}
        /> */}
      </div>
      <div id="post">
        <div id="title">
          <strong>请上传图书海报：</strong>
        </div>
        {/* <ImgUpload
          value={bookImg}
          onChange={(e) => setBookImg(e.target.value)}
        /> */}
        {/* <input
          type="file"
          id="poster"
          value={bookImg}
          onChange={(e) => setBookImg(e.target.value)}
        ></input> */}
        <div>
          <input
            required
            type="file"
            onChange={(e) =>
              setBookImg("http://192.168.1.15:8080/" + e.target.files[0].name)
            }
            style={{
              height: 60,
              width: 250,
              fontSize: 20,
              marginLeft: 50,
              marginTop: 30,
            }}
          ></input>
        </div>
      </div>
      <div id="btn">
        <Button onClick={handleClick} style={{ width: 400, height: 60 }}>
          提交
        </Button>
      </div>
    </Wrapper>
  );
};

const range = [
  { title: "全球热门畅销书" },
  { title: "店铺热门推荐" },
  { title: "2021年度榜单" },
  { title: "2022年度榜单" },
];
export default AddUpdate;
