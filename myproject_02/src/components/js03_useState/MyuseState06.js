import React, { useRef, useState } from 'react';

/**
 * 반복처리 부분에서 key로
 * 순서에 상관 없으면 index를 사용해도 된다.
 * 순서에 영향이 있으면 index가 아닌 고유 id를 사용한다.
 */

const MyuseState06 = () => {
    const inputRef = useRef(null);
    const [userList, setUserList] = useState([
        {
            id: 1,
            name: 'aaa',
        },
        {
            id: 2,
            name: 'bbb',
        },
        {
            id: 3,
            name: 'ccc',
        },
    ]);
    
    const pushNewUser = () => {
        setUserList([
            {
                id: userList.length + 1,
                name: inputRef.current.value,
            },
            ...userList, 
        ]);
        inputRef.current.value = '';
    };

    return (
        <div>
            {userList.map((user, idx) => {
                // return <input type='text' key={idx} placeholder={user.name} style={{ display: 'block' }} />
                return <input type='text' key={user.id} placeholder={user.name} style={{ display: 'block' }} />
            })}
            <input type='text' ref={inputRef} style={{ display: 'block' }} />
            <button type='button' onClick={pushNewUser} style={{ display: 'block' }}>등록</button>
        </div>
    );
};

export default MyuseState06;