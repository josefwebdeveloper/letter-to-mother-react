import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import moment from 'moment';
import Moment from 'react-moment';

const Timer = forwardRef((props, ref) => {
    const now = new Date();

    const ms = moment(now,).diff(moment(props.startCounter,));

    const [counter, setCounter] = useState(ms);
    // const [counter, setCounter] = useState(86400000);
    let t;
    // useImperativeHandle(ref, () => ({
    //     updateCounter() {
    //         clearTimeout(t)
    //         setCounter(86400000);
    //     }
    // }));

    function setCounterTimeout() {
        t=setTimeout(() => setCounter(counter + 1000), 1000);
    }

    useEffect(() => {

        counter > 0 && setCounterTimeout();
    }, [props.startCounter, counter ]);
    return (
        <div className="timer">
            <div> {moment.duration(counter, 'milliseconds').format('dd:hh:mm:ss')}</div>
        </div>
    );
});

export default Timer;
