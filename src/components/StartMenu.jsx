import { useState, useEffect, useRef } from "react";

const apps = [
    { name: "Browser",  icon: "🌐" },
    { name: "Files",    icon: "📁" },
    { name: "Terminal", icon: "🖥️" },
    { name: "Settings", icon: "⚙️" },
    { name: "Music",    icon: "🎵" },
    { name: "Photos",   icon: "🖼️" },
];

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

    const filtered = apps.filter(a =>
        a.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div
            ref={menuRef}
            className="absolute bottom-12 max-h-[620px] w-[500px] left-0 mb-1 rounded-t-2xl shadow-2xl
                       border border-white/10 text-white z-50 overflow-hidden"
        >
            <div className='flex flex-col h-[620px]'>
                <div className="flex items-center gap-3 px-4 py-3 h-20 border-b border-white/10 bg-linear-to-b from-[#80baea] to-60% to-[#3156b0]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600
                                        flex items-center justify-center text-lg font-bold select-none">
                        U
                    </div>
                    <div>
                        <p className="font-semibold text-sm">User</p>
                        <p className="text-xs text-white/50">user@system</p>
                    </div>
                </div>
                <div className='flex w-full h-full'>
                    <div className='bg-white w-1/2 h-full'>
                        <div className="px-3 py-2 ">
                            <input
                                type="text"
                                placeholder="Search apps..."
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                className="w-full bg-white/10 rounded-lg px-3 py-1.5 text-sm
                                           placeholder-white/40 outline-none focus:bg-white/20 transition"
                            />
                        </div>

                        {/* Apps */}
                        <div className="flex flex-col gap-1 p-3">
                            {filtered.length > 0 ? filtered.map(app => (
                                <button
                                    key={app.name}
                                    className="flex flex-row items-center gap-5 p-2 rounded-lg
                                               hover:bg-white/10 transition text-center"
                                >
                                    <span className="text-2xl">{app.icon}</span>
                                    <span className="text-xs text-gray-600">{app.name}</span>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                    </div>
                    <div className='h-full w-0.5 bg-black'></div>
                    <div className='bg-gray-400 w-1/2 h-full'>
                        <div className="px-3 py-2 ">
                            <input
                                type="text"
                                placeholder="Search apps..."
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                className="w-full bg-white/10 rounded-lg px-3 py-1.5 text-sm
                                           placeholder-white/40 outline-none focus:bg-white/20 transition"
                            />
                        </div>

                        {/* Apps */}
                        <div className="flex flex-col gap-1 p-3">
                            {filtered.length > 0 ? filtered.map(app => (
                                <button
                                    key={app.name}
                                    className="flex flex-row items-center gap-5 p-2 rounded-lg
                                               hover:bg-white/10 transition text-center"
                                >
                                    <span className="text-2xl">{app.icon}</span>
                                    <span className="text-xs text-gray-600">{app.name}</span>
                                </button>
                            )) : (
                                <p className="col-span-3 text-center text-white/40 text-xs py-2">No results</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 px-3 py-2 h-14 border-t border-white/10 bg-linear-to-b from-[#80baea] to-60% to-[#3156b0]">
                    <button className="flex items-center gap-1.5 text-xs text-white/70
                                       hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition">
                        🔄 Restart
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-white/70
                                       hover:text-red-400 hover:bg-white/10 px-3 py-1.5 rounded-lg transition">
                        ⏻ Shut Down
                    </button>
                </div>
            </div>
        </div>
    );
}