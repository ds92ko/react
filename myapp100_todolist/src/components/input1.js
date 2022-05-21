import React from 'react';
import TextField from '@mui/material/TextField';

const Input = (props) => {
    return (
        <form onSubmit={props.handleInsertClick}>
            <TextField id="standard-basic" variant="standard" required={true} value={props.input} onChange={props.handleChangeText} />
            <input type='submit' value='Create' />
        </form>
    );
};

export default Input;