import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/admin/dashboard/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: 'admin/dashboard/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Carparks',
    path: 'admin/dashboard/carparks',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Withdraw Funds',
    path: 'admin/dashboard/withdraw',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Account',
    path: '/admin/dashboard/account',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];