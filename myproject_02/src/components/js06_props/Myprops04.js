import React from 'react';

const Myprops04 = ({name = '아무개', age = '20', loc = '수원'}) => {
    // 비구조화 할당 문법
    const style = {
        margin: '15px',
        border: '1px solid black',
        color: 'blue',
        fontSize: '24px',
    }
    return (
        <div>
            <p style={style}>고객님의 이름: {name}, 나이: {age}, 지역: {loc}입니다.</p>
        </div>
    );
};

export default Myprops04;