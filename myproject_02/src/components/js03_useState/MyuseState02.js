import {useState} from 'react';

// 배열 useState
function MyuseState02() {
    const [names, setNames] = useState(['고수', '여진구', '송중기']);
    const [input, setInput] = useState('test'); // 변경된 값 저장

    const handleChangeName = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleClickName = () => {
        // p text 추가
        // setNames([input 값 + names 스프레드 연산자]);
        // setNames([input, ...names]);
        setNames([...names, input]);

        // input value 초기화
        setInput('');
    }

    return(
        <div>
            <input type="text" onChange={handleChangeName} value={input} />
            <button onClick={handleClickName}>ADD</button>
            {names.map((value, index) => {
                return (<p key={index}>{value}</p>);
            })}
        </div>
    )
}

export default MyuseState02