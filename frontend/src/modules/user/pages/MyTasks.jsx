import React from 'react';
import TaskCard from '../../../components/TaskCard';

const MyTasks = () => {
    // Mock data for manual labor jobs
    const tasks = [
        {
            id: 1,
            title: 'Fix Water Leakage',
            description: 'Repair leaking pipe in kitchen sink.',
            status: 'In Progress',
            budget: '₹500',
            date: 'Oct 24, 2023'
        },
        {
            id: 2,
            title: 'Electrical Fan Installation',
            description: 'Install ceiling fan in bedroom.',
            status: 'Completed',
            budget: '₹700',
            date: 'Oct 20, 2023'
        },
        {
            id: 3,
            title: 'House Cleaning',
            description: 'Full house cleaning including bathroom and kitchen.',
            status: 'Open',
            budget: '₹1200',
            date: 'Oct 25, 2023'
        },
        {
            id: 4,
            title: 'Carpentry Work',
            description: 'Fix broken wooden door and hinges.',
            status: 'Open',
            budget: '₹900',
            date: 'Oct 26, 2023'
        },
        {
            id: 5,
            title: 'Painting Work',
            description: 'Paint one bedroom with white color.',
            status: 'Completed',
            budget: '₹3000',
            date: 'Oct 15, 2023'
        },
        {
            id: 6,
            title: 'AC Service',
            description: 'General servicing and gas check for AC.',
            status: 'In Progress',
            budget: '₹1500',
            date: 'Oct 23, 2023'
        }
    ];

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">My Tasks</h2>
            </div>

            <div className="row g-4">
                {tasks.map(task => (
                    <div className="col-md-6 col-lg-4 col-xl-4" key={task.id}>
                        <TaskCard task={task} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTasks;
