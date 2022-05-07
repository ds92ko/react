const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000; // 포트번호 9000으로 설정

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: true}));
// 모든 요청에 대해 허락
app.use(
    cors({
        origin: '*', // 출처 허용옵션
        credentials: 'true' // 사용자 인증이 필요한 리소스(쿠키 등) 접근
    })
);

// get 방식일때 get()
// rep는 요청 res는 응답 해주는 매개변수

// http://localhost:9000/api/hello
// app.get('/api/hello', (rep, res) => {
//     res.send({message: 'Hello Express!!!'});
// });

app.get('/api/customers', (rep, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: '고수',
            birthday: '780604',
            gender: '남자',
            email: 'su@gmial.com'
        },
        {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: '김연아',
            birthday: '980426',
            gender: '여자',
            email: 'kim@daum.net'
        },
        {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: '박태환',
            birthday: '901206',
            gender: '남자',
            email: 'park@naver.com'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on Port ${port}`));