import {useState} from 'react';

const EventPage02 = () => {
    // useState 초기화
    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    const {username, message} = form;

    // username의 value값을 받아서 change 이벤트 실행
    const onChangeUserName = (e) => {
        const nextForm = {
            ...form, // 기존의 form 안의 값을 복사한 뒤 
            [e.target.name]:e.target.value, // 원하는 값을 덮어 씌우기
        };
        
        setUsername(e.target.value); // username state에 값 저장
        console.log(username);
    };

    const onChangeMessage = e => {
        setMessage(e.target.value); // message state에 값 저장
    };

    const onUserClick = () => {
        alert(`${username} : ${message}`);
        // state값 초기화
        setUsername('');
        setMessage('');
    }

    const onKeyPressMessage = e => {
        if (e.key === 'Enter') {
            onUserClick();
        }
    }
    
    return (
        <div>
            <h1>Event Test</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChangeUserName} />
            <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyPress={onKeyPressMessage} />
        </div>
    );
}

export default EventPage02;