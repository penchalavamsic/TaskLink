import React, { useRef, useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const Profile = () => {
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(avatar);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 890',
        bio: 'Passionate web developer with 5 years of experience in React and Node.js.',
        address: '123 Main St, New York, NY 10001'
    });
    const [errors, setErrors] = useState({});

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

    const validateForm = () => {
        const newErrors = {};

        // Last name compulsory
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required.';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        // Phone number validation
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        // Bio max 500 words
        const wordCount = formData.bio.trim().split(/\s+/).length;
        if (wordCount > 500) {
            newErrors.bio = 'Bio must not exceed 500 words.';
        }

        // Address must have pin code
        const pinCodeRegex = /\d{5,6}$/;
        if (!pinCodeRegex.test(formData.address)) {
            newErrors.address = 'Address must include a valid pin code (5-6 digits).';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the data to the backend
            alert("Changes Saved Successfully!");
        }
    };

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">My Profile</h2>

            <div className="row g-4">
                <div className="col-lg-6">
                    {/* Profile Card */}
                    <div className="card border-0 shadow-lg text-center p-4 h-100" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', borderRadius: '15px' }}>
                        <div className="mb-3">
                            <img src={profileImage} className="rounded-circle img-thumbnail" alt="Profile" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        </div>
                        <div className="text-center mb-3">
                            <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>Web Developer & Designer</p>
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
                        <div className="d-flex justify-content-around text-center">
                            <div className="stat-item">
                                <div className="stat-icon mb-2">
                                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h5 className="fw-bold mb-0 text-dark">24</h5>
                                <small className="text-muted fw-semibold">Tasks</small>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon mb-2">
                                    <i className="bi bi-star-fill text-warning" style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h5 className="fw-bold mb-0 text-dark">4.8</h5>
                                <small className="text-muted fw-semibold">Rating</small>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon mb-2">
                                    <i className="bi bi-chat-quote-fill text-info" style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h5 className="fw-bold mb-0 text-dark">12</h5>
                                <small className="text-muted fw-semibold">Reviews</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    {/* Settings Form */}
                    <div className="card border-0 shadow-lg h-100" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', borderRadius: '15px' }}>
                        <div className="card-header bg-white border-bottom-0 pt-4">
                            <h5 className="fw-bold mb-0">Personal Information</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSaveChanges}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">First Name</label>
                                        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Last Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                        {errors.lastName && <div className="text-danger small">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Email <span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} />
                                        {errors.email && <div className="text-danger small">{errors.email}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Phone <span className="text-danger">*</span></label>
                                        <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} />
                                        {errors.phone && <div className="text-danger small">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Bio <span className="text-danger">*</span></label>
                                    <textarea className="form-control" rows="3" name="bio" value={formData.bio} onChange={handleInputChange}></textarea>
                                    <div className="d-flex justify-content-between">
                                        {errors.bio && <div className="text-danger small">{errors.bio}</div>}
                                        <small className="text-muted">{formData.bio.trim().split(/\s+/).length} / 500 words</small>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Address <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleInputChange} />
                                    {errors.address && <div className="text-danger small">{errors.address}</div>}
                                </div>
                                <div className="text-center">
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

export default Profile;