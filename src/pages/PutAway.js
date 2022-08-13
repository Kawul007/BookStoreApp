import React from 'react';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/SideBar/Sidebar';
import AddUpdate from '../components/AddUpdate/AddUpdate';

const PutAway = () => {
  return (
    <div className='home'>
      <Sidebar />
      <AddUpdate />
      <Footer />
    </div>
  );
};

export default PutAway;
