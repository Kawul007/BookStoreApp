import { Table, Tag, Space, Button, Popover } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Wrapper } from "./BookTable.style";
import { Link } from "react-router-dom";
import axios from "axios";

const BookTable = () => {
  //获取所有的数据
  const [data, setDataSource] = useState([]);
  // const changeStorage = (e, set) => {
  //   setStorage(0);
  // };
  const content = (
    <div style={{ fontSize: 10 }}>
      <p>您将下架该书</p>
      <p>点击后无可恢复！</p>
    </div>
  );
  useEffect(() => {
    fetch("http://192.168.1.15:8080/bookitem/getAll")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result);
      });
  }, []);
  //删除当前一行的内容，并再一次调用数据库获取最新数据
  const shelvesClick = (row, i) => {
    fetch(`http://192.168.1.15:8080/bookitem/delete/${i.book_id}`)
      .then((res) => res.json())
      .then((result) => {
        
        if (result.code ===20000) {
        fetch("http://192.168.1.15:8080/bookitem/getAll")
          .then((res) => res.json())
          .then((result) => {
            setDataSource(result);
          });
        }
      });
  };
  // const storageSet = (row, i) =>{
  //   let book_storage = 0 ;
  //   axios({
  //     method: "post",
  //     url: `http:// 192.168.1.15:8080/bookitem/update/${i.book_storage}`,
  //     data: book_storage,
  //   })
  //     .then((res) => {
  //       console.log(1);
  //       console.log(res.data);
  //       if (res.code ===20000) {
  //         fetch("http:// 192.168.1.15:8080/bookitem/getAll")
  //           .then((res) => res.json())
  //           .then((res) => {
  //             setDataSource(res);
  //           });
  //         }
  //     })
  //     .catch((reason) => {});
  //   // fetch(`http://localhost:8080/bookitem/update`, {
  // };
  //
  const columns = [
    {
      title: "图书名称",
      dataIndex: "book_name",
      width: "20%",
      editable: false,
      align: "center",
    },
    {
      title: "库存量",
      dataIndex: "book_storage",
      align: "center",
      sorter: (a, b) => a.book_storage - b.book_storage,
      render:(val,record) =>
      val == 0 ? <div style={{color:"red"}}>缺货！</div> : <div>{val}</div>
    },
    {
      title: "图书价格",
      dataIndex: "book_price",
      align: "center",
      sorter: (a, b) => a.book_price - b.book_price,
    },
    {
      title: "操作",
      dataIndex: "operation",
      align: "center",
      render: (row, i) => (
        <div>
          <Button
            // onClick={() => UPdataClick(row, i)}
            style={{ marginLeft: 20, background: "#47D5A9 ", width: 200 }}
          >
            <Link
              to={{ pathname: `/booklistpage?id=${i.book_id}&updata=true` }}
            >
              更新
            </Link>
          </Button>
          <Popover content={content}>
            <Button
              onClick={() => shelvesClick(row, i)}
              style={{ marginLeft: 20, background: "#F5677C ", width: 200 }}
            >
              下架
            </Button>
          </Popover>
          {/* <Button
            // onClick={() => storageSet(row,i)}
            style={{ marginLeft: 20, background: "#4CE0F5 ", width: 150 }}
          >
            标记为缺货
          </Button> */}
        </div>
      ),
    },
  ];
  return (
    <Wrapper>
      <Table
        rowKey="book_id"
        columns={columns}
        dataSource={data}
        className="logListTable"
        size="larger"
      />
    </Wrapper>
  );
};

export default BookTable;
