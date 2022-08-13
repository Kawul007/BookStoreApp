##web端主要面向于管理员
* 首页：包含小程序端用户行为统计（用户收藏量、注册量、浏览量等）、店铺热门图书榜单等信息。右上角按钮点击打开网页导航栏。下面是效果图：
![](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webHomePage.png)
* 图书仓库页面：包含所有在架图书信息、搜索框和上传页面超链接等
1[](https://github.com/Kawul007/BookStoreApp/raw/main/public/Images/webHomePage.png)
* 图书馆里页面：
* 图书详情/更新图书信息页面：
* 图书上传页面：
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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
