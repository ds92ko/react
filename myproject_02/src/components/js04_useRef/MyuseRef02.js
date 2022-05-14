import React, {useRef, useState} from 'react';

const MyuseRef02 = () => {
    const fnameInput = useRef();
    const inputName = () => {
        // let fname = document.getElementById('fname');
        // console.log(fname.value + ' 고객님 안녕하세요');
        console.log(fnameInput.current.value + ' 고객님 안녕하세요');
    }
    
    // 리액트에서 태그 속성으로 id 사용 권장 X
    return (
        <div>
            {/* <input type="text" placeholder="이름 입력" id="fname" onChange={inputName} /> */}
            <input type="text" placeholder="이름 입력" id="fname" ref={fnameInput} />
            <button type='button' onClick={inputName}>ADD</button>
        </div>
    );
};

export default MyuseRef02;