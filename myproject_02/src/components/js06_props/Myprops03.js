import React from 'react';

const Myprops03 = (props) => {
    const {name, age, loc} = props;
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

export default Myprops03;