import logo from './logo.svg';
import './App.css';
import Customer from './part01_basic/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

function App() {
  const customers = [
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
  ];
  return (
    <Paper>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>이메일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} email={c.email} />
              );
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
