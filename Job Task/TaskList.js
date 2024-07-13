import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, deleteTask } from '../redux/actions/taskActions';
import Task from './Task';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleEdit = (task) => {
        // Handle task edit
    };

    return (
        <div>
            {tasks.map(task => (
                <Task key={task._id} task={task} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TaskList;
