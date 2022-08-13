import React from "react";
import { Wrapper } from "./SystemMap.style";
import { HashRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import { Breadcrumb, Alert } from "antd";

// const SystemMap = () => {
//   return (
//     <>
//       <Wrapper>

//       </Wrapper>
//     </>
//   )
// }

// export default SystemMap

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：
      <Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：
      <Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  "/apps": "Application List",
  "/apps/1": "Application1",
  "/apps/2": "Application2",
  "/apps/1/detail": "Detail",
  "/apps/2/detail": "Detail",
};
const Home = (props) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <Wrapper>
      <div className="demo">
        <div className="demo-nav">
          <Link to="/">Home</Link>
          <Link to="/apps">Application List</Link>
        </div>
        {/* <Routes>
          <Route path="/apps" element={<Apps />} />
          <Route path="*" element={<span>Home Page</span>} />
        </Routes> */}
        <Alert
          style={{ margin: "16px 0" }}
          message="Click the navigation above to switch:"
        />
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </div>
    </Wrapper>
  );
};

export default Home
// export default () => (
//   <HashRouter>
//     <Home />
//   </HashRouter>
// );
