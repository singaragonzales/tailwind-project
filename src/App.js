import './App.css';
import React, { useState } from 'react';
import Logo from './assets/img/logo.png';
import Hero from './assets/img/hero.jpg';
import Activity from './assets/img/activity_img3.png';
import Coin from './assets/img/coin.gif';
import Video02 from './assets/videos/video02.mp4'
import Nav from './components/Nav/Nav';

function App() {

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
        }
    ]

    const toogleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <div className="mx-auto xsm:w-full">
        <Nav/>
        <section className='header'>
            <img className="cursor-pointer" src={Hero} alt=""></img>
        </section>
        <section>
            <div className='bg-wave-white h-6 bg-repeat-x relative -top-2'></div>
            <div className='bg-white-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center'>
                <a className="bg-black buttons-section">Buy Now</a>
                <a className="bg-red-500 buttons-section">Watch the Trailer</a>
            </div>
            <div className='bg-wave-white bg-repeat-x h-6 relative top-2'></div>
        </section>
        <section className='bg-characters-red py-28'>
            <div className='lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3'>
                <div className='bg-characters-mario left bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto'>
                    <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
                        <div className="cover bg-black">
                            <video src='https://c.tenor.com/_Xaa5aaSCT8AAAPo/wes-dont-starve-dont-starve.mp4' autoPlay loop muted></video>
                        </div>
                        <div className="bg-wave-white content bg-repeat-x relative -top-3">
                            <h3 className="font-black text-4xl py-10">Play Together</h3>
                            <p className="text-xl">
                                Work with (or against) your friends and family
                            </p>
                            <a href="#" className='buttons group'>
                                Watch the Trailer
                                <span className="arrow-group group-hover:border-red-500 group-hover:ml-4"></span>
                            </a>
                        </div>
                        <div className="dots flex justify-between p-4">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
                <div className='right w-5/6 md:w-1/2 text-center mx-auto'>
                    <h2 className="font-black text-white text-6xl py-8">Available Now</h2>
                    <p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">
                        Team up for a paws-itively adorable adventure!
                    </p>
                    <p className="text-white mx-auto w-4/5">
                        Bowser is up to his old tricks again and only Mario and his friends can save the day! Use power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to overcome Bowser and his minions.
                    </p>
                    <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
                        <div className="cover bg-black">
                            <video src={Video02} autoPlay loop muted></video>
                        </div>
                        <div className="bg-wave-white content bg-repeat-x relative -top-3">
                            <h3 className="font-black text-4xl py-10">Explore</h3>
                            <p className="text-xl">
                                Prowl through some popular places.
                            </p>
                            <a href="#" className='buttons group'>
                                Take a look
                                <span className="arrow-group group-hover:border-red-500 group-hover:ml-4"></span>
                            </a>
                        </div>
                        <div className="dots flex justify-between p-4">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer text-center flex justify-center gap-9 pt-10">
                {[1,2,3,4,5,6].map(row => (
                    <img src={Coin} alt="" className={`w-[40px] h-[40px] sm:h-[60px] sm:w-[60px] ${row > 3 ? 'hidden sm:block' : ''}`}/>
                ))}
            </div>
        </section>
        <section className='bg-yellow-dots'>
            <div className="bg-wave-pink bg-repeat-x h-6 relative -top-4"></div>
                <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
                    <div className="left xl:w-1/3 lg:w-1/2 p-5">
                        <h3 className="text-yellow-900 font-black xsm:text-3xl sm:text-4xl">
                            Cat  <br /> Transformation <br /> Center
                        </h3>
                        <p className="py-4 text-xl">
                            We're not kitten transform into a cat-tastic new you!
                        </p>
                        <p>
                            <a href="#" className='buttons group'>
                                Meow!
                                <span className="arrow-group group-hover:border-red-500 group-hover:ml-4"></span>
                            </a>
                        </p>
                    </div>
                    <div className="right xl:w-2/3 lg:w-1/2">
                        <img src={Activity} alt="" className='md:w-full'/>
                    </div>
                </div>
        </section>
        <section className='bg-black'>
            <div className='bg-wave-pattern bg-repeat-x h6 relative -top-4'></div>
            <div className="container mx-auto text-center py-10 w-2/3">
                <div className="pb-5">
                    <a href="#" className="buttons group">
                        Customer Support
                        <span className="arrow-group group-hover:border-red-500 group-hover:ml-4"></span>
                    </a>
                </div>
                <div className="text-white">
                    <p className="py-2">
                        Singara Gonzales lo hizo guiandose de un tutorial de tailwind :D
                    </p>
                </div>
            </div>
        </section>                
    </div>
  );
}

export default App;
