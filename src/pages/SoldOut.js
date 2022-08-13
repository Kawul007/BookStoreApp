import React from 'react'
import BookTable from '../components/AllTable/BookTable'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/SideBar/Sidebar'

const SoldOut = () => {
  return (
    <div>
      <Sidebar />
      <BookTable/>
      <Footer />
    </div>
  )
}

export default SoldOut