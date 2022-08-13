import React from 'react'
import Sidebar from '../SideBar/Sidebar'

import {Wrapper,Content} from './Header.Style'

function HomePage() {
  return (
    <Wrapper>
      <h1 id='headline'>Kai4234 BOOKSTORE 后台管理系统</h1>
      <Sidebar />
    </Wrapper>
  )
}

export default HomePage