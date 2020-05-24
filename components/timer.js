import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import moment from 'moment';
import Moment from 'react-moment';

const Timer = forwardRef((props, ref) => {

    const setTime = () => {
        const now = new Date();
        const diff = moment(now).diff(props.startCounter);
        let diffDuration = moment.duration(diff);
        return diffDuration;
    };

    const [counter, setCounter] = useState(setTime());
    let t;


    const handleDayView = (counter) => {
        switch (parseInt(counter)) {
            case 1:
                return 'день';
            case counter > 1 && counter < 5:
                return 'дня';
            default:
                return 'дней';
        }
    };


    function setCounterTimeout() {
        t = setTimeout(() => setCounter(setTime()), 1000);
    }

    useEffect(() => {

        counter && setCounterTimeout();
    }, [props.startCounter, counter]);
    return (
        <div className="timer">
            {/*<div> {handleDay(counter1) + ' ' + handleDayView(moment.duration(counter1, 'milliseconds').format('dd')) + ' ' + moment.duration(counter1, 'milliseconds').format('hh:mm:ss')}</div>*/}
            <div> {counter.days() +' '+ handleDayView(counter.days()) +' '+ counter.hours() + ':' + counter.minutes() + ':' + counter.seconds()}</div>
        </div>
    );
});

export default Timer;
