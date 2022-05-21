import React from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Todo = (props) => {
    return (
        <div className='todo' key={props.todo.id}>
            <h3>
                <label className={props.todo.completed ? 'completed' : null} onClick={props.handleUpdateClick}>
                    {props.todo.todoname}
                </label>
                <label onClick={props.handleDeleteClick}>
                    <DeleteRoundedIcon />
                </label>
            </h3>
        </div>
    );
};

export default Todo;