import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';

const ManageTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // TODO: Fetch tasks from backend
                // const response = await fetch('http://localhost:8080/api/admin/tasks');
                // const data = await response.json();

                setLoading(false);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.id.toString().includes(searchTerm);
        const matchesStatus = filterStatus === 'All' || task.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Task Management</h2>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search tasks by title or ID..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="All">All Status</option>
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Flagged">Flagged</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">Task ID</th>
                                    <th>Title</th>
                                    <th>Posted By</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4">Loading tasks...</td>
                                    </tr>
                                ) : filteredTasks.length > 0 ? (
                                    filteredTasks.map(task => (
                                        <tr key={task.id}>
                                            <td className="ps-4 text-muted">#{task.id}</td>
                                            <td className="fw-semibold">{task.title}</td>
                                            <td>{task.postedBy}</td>
                                            <td className="text-success fw-bold">{task.budget}</td>
                                            <td>
                                                <span className={`badge rounded-pill ${task.status === 'Open' ? 'bg-success' :
                                                    task.status === 'In Progress' ? 'bg-primary' :
                                                        task.status === 'Completed' ? 'bg-secodary' : // fixed typo from secodary if any, assuming success green or primary blue
                                                            task.status === 'Completed' ? 'bg-success' : 'bg-danger' // Just using original logic but ensuring safety
                                                    }`}>
                                                    {task.status}
                                                </span>
                                            </td>
                                            <td>{task.date}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5 text-muted">
                                            No tasks found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTasks;
