import React from 'react'
import { Wrapper } from '../RefreshData/RefreshData.style'

const RefreshData = () => {
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
    fetch("http://localhost:8080/bookitem/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(BookItem),
    }).then(() => {
      alert('上架成功！')
      // console.log(BookItem);
    });
    }
  return (
    <Wrapper>

    </Wrapper>
  )
}


export default RefreshData