import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/actions/taskActions';

const TaskForm = ({ task }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [status, setStatus] = useState(task ? task.status : 'pending');
    const [dueDate, setDueDate] = useState(task ? new Date(task.dueDate).toISOString().substring(0, 10) : '');
    const [priority, setPriority] = useState(task ? task.priority : 'medium');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title, description, status, dueDate, priority };
        if (task) {
            dispatch(updateTask(task._id, newTask));
        } else {
            dispatch(addTask(newTask));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="in-progress">In-progress</option>
                <option value="completed">Completed</option>
            </select>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;
