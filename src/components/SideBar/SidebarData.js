import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as TiIcons from 'react-icons/ti';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: '首页',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: '书籍管理',
    path: '/bookmanage',
    icon: <SiIcons.SiBookstack />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '库存管理',
        path: '/bookmanage/storagemanage',
        icon: <MdIcons.MdStorage />,
        cName: 'sub-nav'
      },
      {
        title: '上架管理',
        path: '/bookmanage/putaway',
        icon: <TiIcons.TiCloudStorage />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: '缺货登记管理',
    path: '/soldout',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav : [
      {
        title: '缺货标记与处理',
        path: '/soldout/make',
        icon: <AiIcons.AiOutlineClockCircle/>,
        cName: 'sub-nav'


      }
    ]
  },
  {
    title: '统计分析',
    path: '/statistic',
    icon: <FaIcons.FaChartLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav : [
      {
        title: '用户数量分析',
        path: '/statistic/usersgrowth',
        icon: <AiIcons.AiOutlineBarChart />
      },
      {
        title: '用户习惯分析',
        path: '/statistic/usersbehavior',
        icon: <GiIcons.GiPieChart />
      }
    ]
  },
  {
    title: '账户管理',
    path: '/accountmanagement',
    icon: <AiIcons.AiOutlineSetting />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '更改帐户信息',
        path: '/accountmanagement/changeinfo',
        icon: <RiIcons.RiAccountPinBoxLine />
      },
      {
        title: '注销账户',
        path: '/accountmanagement/cancleaccount',
        icon: <MdIcons.MdFreeCancellation />
      },
      {
        title: '联系我们',
        path: '/accountmanagement/others',
        icon: <MdIcons.MdOutlineContactMail />
      }
    ]
  }
];
