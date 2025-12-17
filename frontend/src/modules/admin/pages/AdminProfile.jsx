import React, { useRef, useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const AdminProfile = () => {
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(avatar);

    const handleEditPicture = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Here you would typically send the data to the backend
        alert("Changes Saved Successfully!");
    };

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">Admin Profile</h2>

            <div className="row g-4">
                <div className="col-lg-4">
                    {/* Profile Card */}
                    <div className="card border-0 shadow-sm text-center p-4">
                        <div className="mb-3">
                            <img src={profileImage} className="rounded-circle img-thumbnail" alt="Profile" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        </div>
                        <h4 className="fw-bold mb-1">Admin User</h4>
                        <p className="text-muted mb-3">System Administrator</p>
                        <div className="d-flex justify-content-center gap-2 mb-3">
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                            <Button variant="outline-primary" size="sm" onClick={handleEditPicture}>
                                <i className="bi bi-pencil-square me-1"></i> Edit Picture
                            </Button>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-around text-start">
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">150</h5>
                                <small className="text-muted">Users Managed</small>
                            </div>
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">95%</h5>
                                <small className="text-muted">Uptime</small>
                            </div>
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">500</h5>
                                <small className="text-muted">Tasks Verified</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    {/* Settings Form */}
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white border-bottom-0 pt-4">
                            <h5 className="fw-bold mb-0">Personal Information</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSaveChanges}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">First Name</label>
                                        <input type="text" className="form-control" defaultValue="Admin" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Last Name</label>
                                        <input type="text" className="form-control" defaultValue="User" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input type="email" className="form-control" defaultValue="admin@example.com" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Phone</label>
                                        <input type="tel" className="form-control" defaultValue="+1 234 567 890" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Bio</label>
                                    <textarea className="form-control" rows="3" defaultValue="Experienced system administrator managing platform operations and user accounts."></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Address</label>
                                    <input type="text" className="form-control" defaultValue="123 Admin St, New York, NY 10001" />
                                </div>
                                <div className="text-end">
                                    <Button variant="primary" type="submit">Save Changes</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
