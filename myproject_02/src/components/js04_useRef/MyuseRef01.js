import React, {useRef, useState} from 'react';

const MyuseRef01 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    let countLet = 0;
    
    // useRef()는 current에 데이터를 저장한다
    // console.log(countRef);

    /**
     * state와 ref와 let의 차이 (상태 관리)
     * state : 상태 변경 -> 리렌더링 발생 -> 초기화 X
     * ref : 상태 변경 -> 리렌더링 발생 X -> 초기화 X
     * let : 상태 변경 -> 리렌더링 발생 X -> 초기화 O
     */

    /**
     * 리렌더링 발생 시기 (컴포넌트 업데이트)
     * 1. state가 변경될 때
     * 2. props가 변경될 때
     * 3. 부모 component가 리렌더링 될 때
     * 4. class 사용 시 forceUpdate()로 강제로 렌더링을 트리거할 때
     */

    // state는 값이 변경되면 리렌더링 발생, 초기화 안됨
    const upCountState = () => {
        setCount(count + 1);
        console.log(`state: ${count}`);
    }

    // ref는 값이 변경되어도 리렌더링 발생 안함, 초기화 안됨
    const upCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log(`ref: ${countRef.current}`);
    }

    // let는 값이 변경되어도 리렌더링 발생 안함, 초기화 됨
    const upCountLet = () => {
        countLet = countLet + 1;
        console.log(`let: ${countLet}`);
    }

    return (
        <div>
            <p>state: {count}</p>
            <p>Ref: {countRef.current}</p>
            <p>Let: {countLet}</p>
            <button type="button" onClick={upCountState}>State Up</button>
            <button type="button" onClick={upCountRef}>Ref Up</button>
            <button type="button" onClick={upCountLet}>Let Up</button>
        </div>
    );
};

export default MyuseRef01;