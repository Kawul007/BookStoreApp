import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home"; //首页
import StorageManagement from "./pages/StorageManagement"; //库存管理
import PutAway from "./pages/PutAway"; //上架管理
import SoldOut from "./pages/SoldOut"; //缺货登记管理
import Statistic from "./pages/Statistc"; //统计分析
import AccountManagement from "./pages/AccountManagement"; //用户账号管理
import ChangeInfo from "./pages/ChangeInfo"; //更改信息
import CancleAccount from "./pages/CancleAccount"; //账户注销
import Others from "./pages/Others"; //其他
import AllUser from "./pages/AllUser";
import SearchResultPage from "./pages/SearchResultPage";
import Login from "./components/Login/Login";
import BookListPage from "./pages/BookListPage";
// var cors = require("cors");
// App.use(cors({
//   methods: ["GET", "POST"],
//   alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
// }));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Login/>}/> */}
        <Route exact path="/" element={<Home />} />
        <Route path="home" exact element={<Home />} />
        <Route path="/bookmanage" exact element={<StorageManagement />} />
        <Route
          path="/bookmanage/storagemanage"
          exact
          element={<StorageManagement />}
        />
        <Route path="/booklistpage" exact element={<BookListPage />} />
        <Route path="/bookmanage/putaway" exact element={<PutAway />} />
        <Route path="/soldout" exact element={<SoldOut />} />
        <Route path="/searchresult" exact element={<SearchResultPage />} />
        <Route path="/statistic" exact element={<Statistic />} />
        <Route path="/home/statisticuser" exact element={<AllUser />} />
        <Route
          path="/accountmanagement"
          exact
          element={<AccountManagement />}
        />
        <Route
          path="/accountmanagement/changeinfo"
          exact
          element={<ChangeInfo />}
        />
        <Route
          path="/accountmanagement/cancleaccount"
          exact
          element={<CancleAccount />}
        />
        <Route path="/accountmanagement/others" exact element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
