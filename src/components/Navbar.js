import React, {useState} from "react";

function Navbar(){
    let Links = [
        {name:"Home", link:"/"},
        {name:"About", link:"/"},
        {name:"Work", link:"/"},
        {name:"Contact", link:"/"},
    ]
    let [open,setOpen]=useState(false);
    return (
        <div className='shadow-md w-full fixed top-5 left-0'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='font-bold text-4xl cursor-pointer flex items-center
      text-white'>

                    SZYMON RUDZKI
                </div>

                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-white hover:text-white duration-500'>{link.name}</a>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Navbar;