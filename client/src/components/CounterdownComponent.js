import React from "react";

function Countdown () {
    const [timer, setTimer] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const getTime = () => {
        const monthNow = new Date().getMonth();
        const dateNow  = new Date().getDate();

        let month = monthNow;
        let year  = new Date().getFullYear();

        if (dateNow >= 14) {
            if (monthNow === 11) {
                month = 0;
                year++;
            } else {
                month++;
            }
        }

        const baseDeadline = new Date(year, month, 14);        
        const time = baseDeadline - Date.now();

        setTimer({
            days:    Math.floor(time / (1000 * 60 * 60 * 24)),
            hours:   Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        })
    };

    React.useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>
            {timer.days} <small><small>days</small></small> {timer.hours < 10? '0' + timer.hours : timer.hours}:{timer.minutes < 10? '0' + timer.minutes : timer.minutes}:{timer.seconds < 10? '0' + timer.seconds : timer.seconds}
        </span>
    );
}

export default Countdown;