import {useState} from 'react';

// 배열 값 추가 및 제거
function MyuseState05() {
    const [seasons, setSeasons] = useState([
        {
            id: 1,
            text: '봄',
        },
        {
            id: 2,
            text: '여름',
        },
        {
            id: 3,
            text: '가을',
        },
        {
            id: 4,
            text: '겨울',
        },
    ]);

    // 추가
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가 시 사용할 id

    // 이벤트 핸들러
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    const handleClick = () => {
        // 스프레드 연산자 대신 concat 사용 가능
        const nextSeason = seasons.concat({
            id: nextId,
            text: inputText,
        });
        
        console.log(nextSeason);
        setNextId(nextId + 1);
        setSeasons(nextSeason);
        setInputText('');
    }

    // 제거
    const onRemove = (id) => {
        const nextSeason = seasons.filter((season) => {
            return season.id != id
        });
        setSeasons(nextSeason);
    }

    const seasonList = seasons.map((season) => {
        return <li key={season.id} onDoubleClick={() => {
            onRemove(season.id)
        }}>{season.text}</li>;
    })

    return (
        <div>
            <input type="text" value={inputText} onChange={handleChange} />
            <button onClick={handleClick}>추가</button>
            <ul>{seasonList}</ul>
        </div>
    );
}

export default MyuseState05;