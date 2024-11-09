import Logo from "./Logo.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import {useEffect, useRef, useState} from "react";


export default function NavBar({items}) {

    let [scrollPosition, setScrollPosition] = useState(0);

    const [menuIsOpen, setMenuState] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", pageScroll);
    });

    const pageScroll = () => {
        setScrollPosition(scrollPosition = scrollY);
    }

    const setHeaderFixedOnScroll = () => {
        return (scrollPosition > 0) ? 'fixed' : '';
    }

    const toggleMenu = () => {

        setMenuState(!menuIsOpen)

        const navMenu = document.getElementById('nav-menu-mobile');
        navMenu.classList.toggle('hidden');
    }

    const handleClick = (e) => {
         const elementHeader = document.getElementById(e.target.innerText.split(" ").join("-").toLowerCase());
        elementHeader.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const navItems = items.map( (item) =>
        <li
            onClick={ handleClick }
            className='py-4 cursor-pointer w-full text-center mx-3 transition-all hover:scale-110 md:py-0'
            key={item}
        >
            {item}
        </li>);

    return (
        <>
            <nav className={`w-full bg-primary py-2 z-50 border-b-2 border-white ${ setHeaderFixedOnScroll() }`}>
                <div className='container mx-auto flex flex-row justify-between'>
                    <Logo className={`w-1/2 border-3 border-green flex items-center`}/>
                    <BurgerMenu items={items} menuIsOpen={menuIsOpen} handleChange={toggleMenu}/>
                    <ul className='hidden md:flex flex-row items-center w-1/2'>
                        {navItems}
                    </ul>
                </div>
            </nav>
                <nav className={`w-full flex justify-end ${setHeaderFixedOnScroll()} relative`}>
                    <ul
                        onClick={() => toggleMenu() }
                        id='nav-menu-mobile'
                        className='hidden md:hidden flex-col items-center w-3/4 bg-secondary z-50 py-3 fixed top-16'
                    >
                        {navItems}
                    </ul>
                </nav>
        </>
    )
}