import React, { Component, useEffect, useState } from "react";
import { Wrapper } from "./BookList.style";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Axios } from "axios";
import { Button } from "antd";
import axios from "axios";
// import { getDetailData } from "@/utils/api";
// class BookList extends Component {
//   constructor(props,context){
//     console.info(props)
//     this.books = props.locationthis.books.data
//   }

const BookList = (props) => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [img, setImg] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [storage, setStorage] = useState("");
  const [typeName, setTypeName] = useState("");
  const [id, setid] = useState(0);
  const [isShowSave, setIsShowSave] = useState(true);

  useEffect(() => {
    let url = window.location.href;
    let obj = {};
    let arr = url.slice(url.indexOf("?") + 1).split("&");
    arr.forEach((item) => {
      let param = item.split("=");
      obj[param[0]] = param[1];
    });
    setid(obj.id);
    if (obj.updata) {
      setIsShowSave(false);
    } else {
      setIsShowSave(true);
    }
    fetch(`http://192.168.1.15:8080/bookitem/${obj.id}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.book_name);
        setWriter(result.book_writer);
        setImg(result.book_img);
        setInfo(result.book_info);
        setPrice(result.book_price);
        setStorage(result.book_storage);
        setTypeName(result.type_name);
      });
  }, []);
  const changeTypeName = (e, set) => {
    setTypeName(e.target.value);
  };
  const changeStorage = (e, set) => {
    setStorage(e.target.value);
  };
  const changePrice = (e, set) => {
    setPrice(e.target.value);
  };
  const changeInfo = (e, set) => {
    setInfo(e.target.value);
  };
  const changeWriter = (e, set) => {
    setWriter(e.target.value);
  };
  const changeName = (e, set) => {
    setName(e.target.value);
  };
  const saveForm = () => {
    let data = {
      book_id: id,
      book_name: name,
      book_writer: writer,
      book_img: img,
      book_info: info,
      book_price: price,
      book_storage: storage,
      type_name: typeName,
    };
    console.log(data);
    axios({
      method: "post",
      url: "http://192.168.1.15:8080/bookitem/update",
      data: data,
    })
      .then((res) => {
        console.log(1);
        console.log(res.data);
        if (res.data.code == 20000) {
          alert("更新成功");
        }
      })
      .catch((reason) => {});
    // fetch(`http://localhost:8080/bookitem/update`, {
  };
  return (
    <Wrapper>
      <div id="wrap">
        <div id="img">
          <img src={img} style={{ height: 310, width: 250 }} />
        </div>
        <div></div>
        <div id="content">
          <div id="line">
            <div id="title">
              <strong>名称：</strong>
            </div>
            <input
              onChange={(e) => changeName(e)}
              disabled={isShowSave ? true : false}
              value={name}
              id="form"
            ></input>
          </div>
          <div id="line">
            <div id="title">
              <strong>作者：</strong>
            </div>
            <input
              disabled={isShowSave ? true : false}
              onChange={(e) => changeWriter(e)}
              value={writer}
              id="form"
            ></input>
          </div>
          <div id="line">
            <div id="title">
              <strong>简介：</strong>
            </div>
            <textarea
              onChange={(e) => changeInfo(e)}
              disabled={isShowSave}
              id="info-area"
              value={info}
            ></textarea>
          </div>
          <div id="line1">
            <div id="title">
              <strong>价格：</strong>
            </div>
            <input
              onChange={(e) => changePrice(e)}
              value={price}
              id="form"
              disabled={isShowSave}
              type="number"
              placeholder="1.00"
              step="0.01"
              min="0"
              max="100"
            ></input>
          </div>
          <div id="line">
            <div id="title">
              <strong>库存：</strong>
            </div>
            <input
              onChange={(e) => changeStorage(e)}
              value={storage}
              id="form"
              disabled={isShowSave}
              type="number"
              placeholder="0"
              step="1.0"
              min="0"
              max="10000"
            ></input>
          </div>
          <div id="line">
            <div id="title">
              <strong>类型：</strong>
            </div>
            {/* <input
            id="space-holder2"
            type="test"
            list="typelist"
            placeholder="请选择"
            value={typeName}
            onChange={(e)=>setTypeName(e.target.value)}
          ></input>
          <datalist id="typelist">
            <option>全球热门畅销书</option>
            <option>店铺热门推荐</option>
            <option>2021年度榜单</option>
            <option>2020年度榜单</option>
            <option>最新出版上架</option>
          </datalist> */}
            <div id="space-holder2">
              <input
                onChange={(e) => changeTypeName(e)}
                disabled={isShowSave}
                value={typeName}
                id="form"
                // type="number"
                // placeholder="1.00"
                // step="0.01"
                // min="0"
                // max="100"
              ></input>
              {/* <Autocomplete
                freeSolo
                // id="free-solo-2-demo"
                disableClearable
                options={range.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    // value={typeName}
                    {...params}
                    style={{ border: "none" }}
                    label="请选择图书类型"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              /> */}
            </div>
          </div>
          {!isShowSave && (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingRight: 150,
                marginTop: 37,
              }}
            >
              <Button onClick={saveForm} type="primary" size="larger" style={{width:200,height:40,alignItems:"center",marginRight:200}}>
                保存
              </Button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const range = [
  { title: "全球热门畅销书" },
  { title: "本店热门畅销书" },
  { title: "2021年度榜单" },
  { title: "2022年度榜单" },
  { title: "最新出版上架" },
];
export default BookList;
