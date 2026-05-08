import {useEffect, useState} from "react";

export default function Clock(){
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <p className="text-xl font-semibold font-mono px-2">{time}</p>;
};