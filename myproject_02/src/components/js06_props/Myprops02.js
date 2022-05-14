import React from 'react';

const Myprops02 = (props) => {
    return (
        <div>
            <p>고객님의 이름: {props.name}, 나이: {props.age}, 지역: {props.loc}입니다.</p>
        </div>
    );
};

export default Myprops02;