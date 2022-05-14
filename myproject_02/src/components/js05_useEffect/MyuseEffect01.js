import React, {useEffect, useRef, useState} from 'react';

// useEffect()는 렌더링이 끝나고 난 후 수행
// componentDidMount와 componentDidUpdate 후 실행
const MyuseEffect01 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const inputName = useRef();

    useEffect(() => {
        inputName.current.focus();
    }, []);

    useEffect(() => {
        console.log(`name : ${name}`);
    }, [name]);

    useEffect(() => {
        console.log(`nickname : ${nickname}`);
    }, [nickname]);

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

export default MyuseEffect01;