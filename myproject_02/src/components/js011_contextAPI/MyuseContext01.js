import React, { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { UserContext } from './contexts/UserContext';
import Left1 from './Left1';
import Right1 from './Right1';
import './MyuseContext01.css';

/**
 * Provider
 * 1. createContext()를 이용해서 context 생성
 * 2. <Context.Provider value={{state 또는 function 전달 가능}}>
 *      <Context.Provider value={{state 또는 function 전달 가능}}>
 *          <Component />
 *      </Context.Provider>
 *    </Context.Provider>
 *    Context가 여러개일 경우 중첩해서 사용, 그 안에 Component 추가
 * Consumer
 * 1. const {name, setName} = useContext(Context)
 */

const MyuseContext01 = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('고수');
    const onHandleName = () => {
        setName(name === '고수' ? '여진구' : '고수');
    }
    const onHandleIncrease = () => {
        setNumber(number + 1);
    }

    return (
        <UserContext.Provider value={{ name, setName, onHandleName }}>
            <ThemeContext.Provider value={{ number, setNumber, onHandleIncrease }}>
                <div id="page">
                    <h1>Page</h1>
                    <div className="grid">
                        <Left1 />
                        <Right1 />
                    </div>
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
};

export default MyuseContext01;