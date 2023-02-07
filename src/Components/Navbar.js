import React, { useState } from 'react';
import Logo from '../Assets/logo.png';
import { CgShoppingCart } from 'react-icons/Cg';
import { HiOutlineBars3 } from 'react-icons/Hi';
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text:"Home",
      icon:<HomeIcon/>
    },
    {
      text:"Sobre",
      icon:<InfoIcon/>
    },
    {
      text:"Depoimentos",
      icon:<CommentRoundedIcon/>
    },
    {
      text:"Contato",
      icon:<PhoneRoundedIcon />
    },
    {
      text:"Carrinho",
      icon:<ShoppingCartRoundedIcon />
    },
  ];

  return <nav>
    <div className='nav-logo-container'>
      <img src= { Logo } alt='Logo da Pizzaria' />      
    </div>
    <div className='navbar-links-container'>
      <a href=''>Home</a>
      <a href=''>Sobre</a>
      <a href=''>Depoimentos</a>
      <a href=''>Contato</a>
      <a href=''>
        <CgShoppingCart className='navbar-cart-icon' />
      </a>
      <button className='primary-button'>Compre Agora!</button>
    </div>
    <div className='navbar-menu-container'>
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    </nav>
}

export default Navbar;