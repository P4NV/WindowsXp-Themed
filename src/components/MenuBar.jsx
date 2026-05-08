import { useState,} from "react";

import Clock from "../Functions/Clock.jsx";
import StartMenu from "./StartMenu.jsx";


export default function MenuBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="relative flex flex-row justify-between bg-linear-to-b from-[#80baea] to-60% to-[#3156b0] w-full">
                <div className='w-[80%]'>

                    {/* Start Menu renders above the button */}
                    {menuOpen && <StartMenu onClose={() => setMenuOpen(false)} />}

                    <div className="flex flex-row gap-3 py-1 pl-2 rounded-r-[20px] max-w-[150px] bg-linear-to-b from-[#007d01] to-60% to-[#005603]
                                    hover:brightness-125 cursor-pointer"
                         onClick={() => setMenuOpen(prev => !prev)}>
                        <img className='max-w-10' src='/startIcon.png' alt='start'/>
                        <h1 className='text-3xl font-semibold text-white italic'>Start</h1>
                    </div>

                </div>
                <div className='flex gap-2 pl-3 items-center bg-linear-to-b from-[#e8f2fa] to-60% to-[#7ba2cf]
                                hover:brightness-110'>
                    <img className='max-w-8' src='/Network.ico' alt='connection'/>
                    <div id='clock'><Clock/></div>
                </div>
            </div>
        </>
    );
}