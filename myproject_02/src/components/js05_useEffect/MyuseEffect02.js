import React, {useEffect, useRef, useState} from 'react';

const MyuseEffect02 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const inputName = useRef();

    // useEffect(() => {
    //     console.log(`name : ${name}, nickname : ${nickname}`);
    //     return () => {
    //         console.log('cleanup');
    //     }
    // });

    useEffect(() => {
        console.log(`name : ${name}, nickname : ${nickname}`);
        return () => {
            console.log('cleanup');
        }
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName} ref={inputName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </>
    );
};

export default MyuseEffect02;