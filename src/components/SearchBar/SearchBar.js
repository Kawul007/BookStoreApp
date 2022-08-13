import React, { useState } from "react";
import "./Search.styles";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Content, Wrapper } from "./Search.styles";
import { Button } from "antd";

const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [books, setBooks] = useState([]);

  // //数据获取地址
  // useEffect(() => {
  //   fetch("http://localhost:8080/bookitem/getAll")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setBooks(result);
  //     });
  // }, []);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = books.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const SearchInput = () => {
    fetch(`http://10.236.1.7:8080/bookitem/search/${wordEntered}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.code === 20000) {
        }
      });
  };
//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

  return (
    <Wrapper>
      <Content>
        <div className="search">
          <div className="searchInputs">
            {/* <input
              type="text"
              placeholder={""}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div onClick={SearchInput} className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div> */}
          </div>
          {/* {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => { */}
          {/* return ( */}
          {/* // <div><MovieItem/></div>//搜索返回结果bookName */}
          {/* // <a className="dataItem" href={value.books} target="_blank"> */}{" "}
          {/*获取到bookName以后点击跳转到相应的booklistpage查看详情；*/}
          {/* <Link to="/booklistpage">
                      <p>{value.book_name}</p>
                    </Link>
                  </a>
                );
              })}
            </div>
          )} */}
        </div>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
