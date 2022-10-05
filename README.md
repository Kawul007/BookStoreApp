#【web端主要面向于管理员】-React、React-router、Ajax、CSS、HTML、Ant Design、ECharts等来实现
* 首页：包含小程序端用户行为统计（用户收藏量、注册量、浏览量等）、店铺热门图书榜单等信息。右上角按钮点击打开网页导航栏。下面是效果图：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webHomePage.png)
* 图书仓库页面：包含所有在架图书信息、搜索框和上传页面超链接以及分页显示功能等。效果图如下：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webBook.png)
* 图书管理页面：包含库存中的所有图书，以使用Ant Design Table来实现，可以按图书的库存/价格等来排序进行显示；管理可以进行对该书下架操作，或点击更新到更新图书信息页面，对图书进行更新；当图书的库存量调整为0时，库存会自动爆红显示为库存缺货；效果图如下：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webBookManage.png)
* 图书详情/更新图书信息页面：更新内容页面管理员可以对图书信息进行更改，并保存；详情页也是类似布局，但是管理员在详情页面不可以对图书信息进行更改的。效果图如下：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webBookChange.png)
* 图书上传页面：管理员必须填写完所有内容之后才能提交上架图书。效果图如下：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webBookUpload.png)
* 图书搜索页面：根据搜索内容返回相应的图书卡片，以便管理员查找已经上架过的图书。效果图如下：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webBookSearch.png) 
* 项目文件架构以及components内容树：
```
kai4234BookStore
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ Images
│  │  ├─ book01.jpg
│  │  ├─ book02.jpg
│  │  ├─ book03.jpg
│  │  ├─ book04.jpg
│  │  ├─ book05.jpg
│  │  ├─ book06.jpg
│  │  ├─ logo.jpg
│  │  └─ logo2.png
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ components
   │  ├─ AddUpdate
   │  │  ├─ AddUpdate.js
   │  │  ├─ AddUpdate.style.js
   │  │  ├─ Http.js
   │  │  ├─ ImgUpload.js
   │  │  └─ ImgUpload.style.js
   │  ├─ AllTable
   │  │  ├─ AllTable.js
   │  │  ├─ AllTable.style.js
   │  │  ├─ BookTable.js
   │  │  └─ BookTable.style.js
   │  ├─ BookItem
   │  │  ├─ BookData.js
   │  │  ├─ BookData.json
   │  │  ├─ BookItem.js
   │  │  ├─ BookItem.style.js
   │  │  ├─ BookList.js
   │  │  ├─ BookList.style.js
   │  │  ├─ PaginateIndex.js
   │  │  ├─ Pagination.js
   │  │  └─ Pagination.style.js
   │  ├─ Cards
   │  │  ├─ Cards.js
   │  │  └─ Cards.style.js
   │  ├─ Dropdown
   │  │  ├─ Clock.js
   │  │  ├─ Clock.style.js
   │  │  ├─ Dropdown.js
   │  │  └─ Dropdown.style.js
   │  ├─ Filter
   │  │  ├─ DropMenu.js
   │  │  ├─ DropMenu.style.js
   │  │  ├─ Filter.js
   │  │  ├─ Filter.style.js
   │  │  └─ FilterData.js
   │  ├─ Footer
   │  │  ├─ Footer.js
   │  │  └─ Footer.style.js
   │  ├─ Header
   │  │  ├─ Header.js
   │  │  └─ Header.Style.js
   │  ├─ ImageUpload
   │  │  ├─ ImageUpload.js
   │  │  └─ ImageUpload.style.js
   │  ├─ Login
   │  │  ├─ Login.js
   │  │  ├─ Login.style.js
   │  │  ├─ SignIn.js
   │  │  └─ SignUp.js
   │  ├─ Navigation
   │  │  ├─ Navigation.js
   │  │  └─ Navigation.styles.js
   │  ├─ RefreshData
   │  │  ├─ RefreshData.js
   │  │  └─ RefreshData.style.js
   │  ├─ SearchBar
   │  │  ├─ Search.styles.js
   │  │  └─ SearchBar.js
   │  ├─ SideBar
   │  │  ├─ Sidebar.js
   │  │  ├─ Sidebar.style.js
   │  │  ├─ SidebarData.js
   │  │  ├─ SubMenu.js
   │  │  └─ SubMenu.style.js
   │  ├─ Statistics
   │  │  ├─ StatisticCollect.js
   │  │  ├─ Statistics.js
   │  │  ├─ Statistics.styled.js
   │  │  ├─ StatisticUser.js
   │  │  └─ StatisticVisit.js
   │  ├─ SystemMap
   │  │  ├─ SystemMap.js
   │  │  └─ SystemMap.style.js
   │  └─ UserStatistic
   │     ├─ UserStatistic.js
   │     └─ UserStatistic.style.js
   ├─ index.css
   ├─ index.js
   ├─ pages
   │  ├─ AccountManagement.js
   │  ├─ AllUser.js
   │  ├─ BookListPage.js
   │  ├─ BookManagement.js
   │  ├─ CancleAccount.js
   │  ├─ ChangeInfo.js
   │  ├─ Home.js
   │  ├─ Others.js
   │  ├─ PutAway.js
   │  ├─ SearchResultPage.js
   │  ├─ SoldOut.js
   │  ├─ Statistc.js
   │  └─ StorageManagement.js
   ├─ reportWebVitals.js
   └─ setupTests.js

```
