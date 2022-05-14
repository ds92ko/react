import {useState} from 'react';

// 객체 useState
function MyuseState03() {
    const [customer, setCustomer] = useState({
        name: '홍길동',
        address: '서울시 강남구',
        phone: '010-1234-5678',
    });

    const onChangeName = (e) => {
        // setCustomer({name: e.target.value});
        setCustomer((prevState) => {
            return {...prevState, name: e.target.value};
        });
    }

    const onChangeAddress = (e) => {
        // setCustomer({address: e.target.value});
        setCustomer((prevState) => {
            return {...prevState, address: e.target.value};
        });
    }

    const onChangePhone = (e) => {
        // setCustomer({phone: e.target.value});
        setCustomer((prevState) => {
            return {...prevState, phone: e.target.value};
        });
    }

    const handleConfirm = (e) => {
        console.log(customer);
    }

    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>이름</span>
                <input type="text" onChange={onChangeName} value={customer.name}/>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>주소</span>
                <input type="text" onChange={onChangeAddress} value={customer.address}/>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span>전화번호</span>
                <input type="text" onChange={onChangePhone} value={customer.phone}/>
            </div>
            <p  style={{textAlign: 'right'}}>
                <button type="button" onClick={handleConfirm}>확인</button>
            </p>
        </div>
    );
}

export default MyuseState03;