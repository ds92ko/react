import logo from './logo.svg';
import './App.css';
import Customer from './part01_basic/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const baseUrl = 'http://localhost:9000';
  const [customers, setCustomers] = useState('');
  
  useEffect(() => {
    getCustomers();
  }, []);
  
  async function getCustomers() { // promise return
    await axios // 비동기
    .get(`${baseUrl}/api/customers`) // 요청
    .then((response) => { //res.send 에서 보내주는 값 처리
      // console.log(response.data);
      setCustomers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Paper>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">번호</TableCell>
            <TableCell align="center">이미지</TableCell>
            <TableCell align="center">이름</TableCell>
            <TableCell align="center">생일</TableCell>
            <TableCell align="center">성별</TableCell>
            <TableCell align="center">이메일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? customers.map((c) => {
            return (
              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} email={c.email} />
              );
            }) : null }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
