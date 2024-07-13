import React from 'react';
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';


const Dashboard = () => {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleEdit = (task) => {
        setSelectedTask(task);
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <TaskForm task={selectedTask} />
            <TaskList onEdit={handleEdit} />
        </div>
    );
};

export default Dashboard;
