    import { useState, useEffect, useRef } from "react";

// left sidebar apps
const apps = [
    { name: "Internet",  icon:'/AppIcons/Internet.ico', desc: 'Internet Explorer' },
    { name: "Email",   icon: '/FileIcons/folder.png', desc: 'Outlook Express'  },
];
const apps2 = [
    { name: "Minesweeper", icon: "/AppIcons/Minesweeper.ico" },
    { name: "Notepad", icon: "/AppIcons/notepad.png" },
    { name: "WinRAR",    icon: "/AppIcons/Winrar.png" },
    { name: "Paint",   icon: "/AppIcons/Paint.png" },
    { name: "MusicDisk",   icon: "/AppIcons/sound-juicer.png" },
];
//************************
// right sidebar apps
const systemApps = [
    { name: 'My Documents', icon:'/FileIcons/792.ico' },
    { name: 'My Recent Documents', icon:'/FileIcons/1409.ico' },
    { name: 'My Pictures', icon:'/FileIcons/804.ico' },
    { name: 'My Music', icon:'/FileIcons/820.ico' },
    { name: 'My Computer', icon: '/computer.png'},
    { name: 'My Network Places', icon:'/Network.ico' },
];
const systemApps2 = [
    { name: 'Control Panel', icon:'/AppIcons/ControlPanel.ico' },
    { name: 'Set Program Access and Defaults', icon:'/AppIcons/SPAD.png' },
    { name: 'Printers and Faxes', icon:'/AppIcons/Printer.ico' },
];
const systemApps3 = [
    { name: 'Help and Support', icon:'/AppIcons/Help.ico' },
    { name: 'Search', icon:'/AppIcons/Search.ico' },
    { name: 'Run...', icon:'/AppIcons/Run.ico' },
]
//**********************

export default function StartMenu({ onClose }) {
    const [query, setQuery] = useState("");
    const menuRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onClose]);


    const filteredApp = apps.filter(a =>
        a.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredApp2 = apps2.filter(a =>
        a.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredSystem = systemApps.filter(a =>
        a.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredSystem2 = systemApps2.filter(a =>
        a.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredSystem3 = systemApps3.filter(a =>
        a.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div
            ref={menuRef}
            className="absolute bottom-12 max-h-[620px] w-[500px] left-0 mb-1 rounded-t-2xl shadow-2xl
                       border border-white/10 text-white z-50 overflow-hidden"
        >
            <div className='flex flex-col h-[620px]'>
                {/*Profile bar*/}
                <div className="flex items-center gap-3 px-4 py-1.5 h-20 border-b border-white/10 bg-linear-to-b from-[#80baea] to-60% to-[#3156b0]">
                    <div className="bg-[url(/profile.jpg)] bg-center bg-cover border-2 rounded-lg border-gray-300/90 w-14 h-14 flex select-none"></div>
                    <div>
                        <p className="font-semibold text-xl">Bungalo</p>
                    </div>
                </div>

                <div className='flex w-full h-full overflow-y-auto'>
                    <div className='bg-white w-1/2 h-full'>
                        {/*<div className="px-3 py-2 ">*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        placeholder="Search apps..."*/}
                        {/*        value={query}*/}
                        {/*        onChange={e => setQuery(e.target.value)}*/}
                        {/*        className="w-full bg-white/10 rounded-lg px-3 py-1.5 text-sm*/}
                        {/*                   placeholder-white/40 outline-none focus:bg-white/20 transition"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/* Apps left sidebar */}
                        <div className="flex flex-col gap-0.5 pl-2 p-1">
                            {filteredApp.length > 0 ? filteredApp.map(app => (
                                <button
                                    key={app.name}
                                    className="flex flex-row items-center gap-5 p-1 rounded-lg
                                               hover:bg-white/10 transition text-center"
                                >
                                    <img className="w-12" src={app.icon} alt=''/>
                                    <div className='flex flex-col text-left'>
                                        <span className="text-sm font-black text-gray-600">{app.name}</span>
                                        <span className="text-xs text-gray-500">{app.desc}</span>
                                    </div>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <hr className='w-[80%] text-gray-400/50'/>
                        </div>
                        <div className="flex flex-col gap-0.5 pl-2 p-1">
                            {filteredApp2.length > 0 ? filteredApp2.map(app2 => (
                                <button
                                    key={app2.name}
                                    className="flex flex-row items-center gap-5 p-1 rounded-lg
                                               hover:bg-white/10 transition text-center"
                                >
                                    <img className="w-12" src={app2.icon} alt=''/>
                                    <span className="text-sm  font-medium text-gray-600">{app2.name}</span>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                        <div className='flex w-full pt-8'>
                            <button className='flex w-full justify-center'>
                                <h1 className='text-black font-medium text-xl'>All Programs</h1>
                                <img src='/ActionIcons/arrowright.png' alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='h-full w-0.5 bg-black'></div>
                    {/*right sidebar*/}
                    <div className='bg-[#d3e5fa] w-1/2 h-full overflow-y-scroll'>
                        {/*<div className="px-3 py-2 ">*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        placeholder="Search apps..."*/}
                        {/*        value={query}*/}
                        {/*        onChange={e => setQuery(e.target.value)}*/}
                        {/*        className="w-full bg-white/10 rounded-lg px-3 py-1.5 text-sm*/}
                        {/*                   placeholder-white/40 outline-none focus:bg-white/20 transition"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/* Apps right sidebar */}
                        <div className="flex flex-col gap-1 p-2">
                            {filteredSystem.length > 0 ? filteredSystem.map(systemApps => (
                                <button
                                    key={systemApps.name}
                                    className="flex flex-row items-center gap-3 p-0.5 rounded-lg
                                               hover:bg-blue-500/40 text-center"
                                >
                                    <img className='max-w-8' src={systemApps.icon} alt=''/>
                                    <span className="text-sm font-extrabold text-blue-800">{systemApps.name}</span>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <hr className='w-[80%] text-gray-400'/>
                        </div>
                        {/*2nd Apps right sidebar*/}
                        <div className="flex flex-col gap-0 p-2">
                            {filteredSystem.length > 0 ? filteredSystem2.map(systemApps2 => (
                                <button
                                    key={systemApps2.name}
                                    className="flex flex-row items-center gap-3 p-0.5 rounded-lg
                                               hover:bg-blue-500/40 text-left"
                                >
                                    <img className='max-w-8' src={systemApps2.icon} alt=''/>
                                    <span className="text-sm font-medium text-blue-800">{systemApps2.name}</span>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <hr className='w-[80%] text-gray-400'/>
                        </div>
                        {/*3rd Apps right sidebar*/}
                        <div className="flex flex-col gap-0 p-2">
                            {filteredSystem.length > 0 ? filteredSystem3.map(systemApps3 => (
                                <button
                                    key={systemApps3.name}
                                    className="flex flex-row items-center gap-3 p-0.5 rounded-lg
                                               hover:bg-blue-500/40 text-left"
                                >
                                    <img className='max-w-7' src={systemApps3.icon} alt=''/>
                                    <span className="text-sm font-medium text-blue-800">{systemApps3.name}</span>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 px-3 py-2 h-14 border-t border-white/10 bg-linear-to-b from-[#80baea] to-60% to-[#3156b0]">
                    <button className="flex items-center gap-1.5 text-sm text-white/70
                                       hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition">
                        <img className='w-[32px]' src='/ActionIcons/lockscreen.png' alt='lockscreen' />
                        <span>Log off</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-white/70
                                       hover:text-red-400 hover:bg-white/10 px-3 py-1.5 rounded-lg transition">
                        <img className='w-[32px]' src='/ActionIcons/gnome-logout.png' alt='exit' />
                        <span>Turn off Computer</span>
                    </button>
                </div>
            </div>
        </div>
    );
}