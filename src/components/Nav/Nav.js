import React, { useState } from 'react';
import Logo from '../../assets/img/logo_dst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const links = [
        {
            name: 'Home',
            special: 'none'
        },
        {
            name: 'Play Together',
            special: 'none'
        },
        {
            name: 'Explore',
            special: 'none'
        },
        {
            name: 'Bowser Fury',
            special: 'white-button'
        },
        {
            name: 'Buy Now',
            special: 'red-button'
        },
        {
            name: 'Buy Now',
            special: 'red-button'
        }
    ]



    const toogleMenu = () => {
        $(document).ready(function () {
            $(".nav-toggler").each(function (_, navToggler) {
              var target = $(navToggler).data("target");
                setShowMenu(!showMenu)
                showMenu ? $(target).removeClass('hidden') : $(target).addClass('hidden')
            });
        });
    }
    
  return (
    <nav className="bg-gray-800 flex flex-wrap p-3 items-center">
        <div className="p-2 mr-4 inline-flex items-center">
            <img className="cursor-pointer fill-current mr-2" src={Logo} alt="" width="100" />
        </div>
        <button 
            onClick={toogleMenu} 
            data-target="#navigation" 
            className='text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'>
            <FontAwesomeIcon icon={faBars} />
        </button>
        <div className='hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto' id='navigation'>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                {links.map(row => (
                    <a href="#" className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white
                    hover:bg-gray-900'>{row.name}</a>
                ))}
            </div>
        </div>
    </nav>
  );
}

export default Nav;
