import React, { useState } from 'react';
import TaskCard from '../../../components/TaskCard';

const BrowseTasks = () => {
    // Mock data
    // Mock data removed
    const tasks = [];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All Categories' || task.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">Browse Tasks</h2>
                <div className="d-flex gap-2">
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search tasks..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="form-select w-auto pe-5" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option>All Categories</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Carpentry</option>
                        <option>Painting</option>
                        <option>Cleaning</option>
                        <option>Repair</option>
                    </select>
                </div>
            </div>

            <div className="row g-4">
                {filteredTasks.map(task => (
                    <div className="col-md-6 col-lg-4 col-xl-4" key={task.id}>
                        <TaskCard task={task} detailPath="/worker/task-detail" />
                    </div>
                ))}
            </div>
        </div >
    );
};

export default BrowseTasks;
