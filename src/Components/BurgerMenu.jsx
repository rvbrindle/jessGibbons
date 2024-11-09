import {useEffect} from "react";

export default function BurgerMenu(props) {

    // useEffect(()=>{
    //     animateBurger()
    //     props.handleChange()
    // },[props.menuIsOpen]);

    const animateBurger = () => {

        const burgerBar1 = document.getElementById('burger-bar-1');
        const burgerBar2 = document.getElementById('burger-bar-2');
        const burgerBar3 = document.getElementById('burger-bar-3');

        burgerBar1.classList.toggle('-rotate-45');
        burgerBar1.classList.toggle('absolute');

        burgerBar2.classList.toggle('opacity-0');

        burgerBar3.classList.toggle('rotate-45');
        burgerBar3.classList.toggle('absolute');

        props.handleChange()
    };

    return (
        <>
            <div className='z-10 group md:hidden flex flex-col w-2/12 justify-center items-center relative cursor-pointer'
                 onClick={event => animateBurger(event)}
            >
                <div
                    id='burger-bar-1'
                    className='w-1/2 bg-white h-1 origin-center transition-all ease-in-out duration-500'></div>
                <div
                    id='burger-bar-2'
                    className='w-1/2 bg-white h-1 my-2 sm:my-4 transition-all ease-in duration-200'></div>
                <div
                    id='burger-bar-3'
                    className='w-1/2 bg-white h-1 origin-center transition-all ease-in-out duration-500'></div>
            </div>
        </>
    )
}