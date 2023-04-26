import React, {useEffect, useState} from 'react';

import { aside_menu } from '../../utils/aside_menu';
import { Link, useLocation, useNavigate } from "react-router-dom";

import Web3 from "web3";

const Navbar = () => {

  let ethereum
  if (typeof window.ethereum !== 'undefined') {
    ethereum = window.ethereum
    console.log('MetaMask is installed!');
  }

  const [userAdress, setUserAdress] = useState(null)
 
  const connectWallet = () => {
     ethereum?.request({ method: 'eth_requestAccounts' })
     .then((value) => {
       setUserAdress(value[0])
       })
       .catch((e) => {
         console.error(e); 
       });
    }

    useEffect(()=>{
      //слушаем подключен ли кошелек
     setInterval(() =>{
        ethereum?.selectedAddress?
          setUserAdress(ethereum.selectedAddress)
          :
          setUserAdress(null)
      }, 500);
 
      },[])

    const location = useLocation()
    const currentItem = aside_menu.filter(menuitem => menuitem.link === location.pathname);

    return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" >Pages</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">{currentItem[0].name}</li>
          </ol>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
          </div>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a className="btn btn-outline-primary btn-sm mb-0 me-3"
              onClick={event=> connectWallet()}
              >{userAdress?
                'wallet: '+ userAdress.slice(0,6) + '...' + userAdress.slice(37, userAdress.length)
                : 'Connect wallet'
                }</a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a className="nav-link text-body p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;