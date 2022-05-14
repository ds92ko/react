import React, {useEffect, useRef, useState, useMemo} from 'react';

const MyuseMemo01 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputRef = useRef();
    
    useEffect(() => {
        inputRef.current.focus();
    });

    const onChange = (e) => {
        setNumber(e.target.value);
        console.log(e.target.value);
    };
    const onInsert = () => {
        console.log('onInsert');
        setList([parseInt(number), ...list]);
        setNumber('');
    };

    const getAverage = (list) => {
        console.log('getAverage');
        if (list.length === 0) {
            return 0
        }
        else {
            const sum = list.reduce((a, b) => {
                return a + b;
            });

            return sum / list.length;
        }
    }

    //useMemo(callbackFn, []);
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="number" value={number} onChange={onChange} ref={inputRef}/>
            <button type="button" onClick={onInsert}>등록</button>
            {/* <p><b>평균: {getAverage(list)}</b></p> */}
            <p><b>평균: {avg}</b></p>
            <ul>
                {list.map((ele, idx) => {
                    return (<li key={idx}>{ele}</li>);
                })}
            </ul>
        </div>
    );
};

export default MyuseMemo01;