import React, { useRef, useState } from 'react';
import Button from '../../../components/Button';
import avatar from '../../../assets/avatar_placeholder.png';

const Profile = () => {
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(avatar);
    const [loading, setLoading] = useState(true);

    // State for user profile data
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        about: '' // mapped to 'bio' in UI, handled as transient/ignored by backend for now if field missing
    });

    // State for dashboard stats (task count)
    const [stats, setStats] = useState({
        totalTasks: 0,
        rating: 0.0,
        reviews: 0
    });

    // Fetch data on mount
    React.useEffect(() => {
        const fetchAllData = async () => {
            try {
                const userStr = localStorage.getItem('user');
                if (!userStr) {
                    setLoading(false);
                    return;
                }
                const user = JSON.parse(userStr);

                // 1. Fetch Profile Data
                const profileResponse = await fetch(`http://localhost:8080/api/user/${user.userId}/profile`);
                if (profileResponse.ok) {
                    const data = await profileResponse.json();
                    setUserData({
                        firstName: data.firstName || '',
                        lastName: data.lastName || '',
                        email: data.email || '',
                        phone: data.phone || '',
                        address: data.address || '',
                        about: '' // 'about' field not yet in backend User entity, keeping empty/local
                    });
                }

                // 2. Fetch Dashboard Stats (for Task Count)
                const statsResponse = await fetch(`http://localhost:8080/api/user/${user.userId}/dashboard`);
                if (statsResponse.ok) {
                    const statsData = await statsResponse.json();
                    setStats(prev => ({
                        ...prev,
                        totalTasks: statsData.totalTasks || 0
                        // rating and reviews not yet dynamic in backend stats endpoint, keeping default
                    }));
                }

            } catch (error) {
                console.error("Error loading profile data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user = JSON.parse(userStr);

                // Exclude 'about' if backend doesn't support it to avoid 400 Bad Request
                const { about, ...payload } = userData;

                const response = await fetch(`http://localhost:8080/api/user/${user.userId}/profile`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert("Changes Saved Successfully!");
                } else {
                    alert("Failed to save changes.");
                }
            }
        } catch (error) {
            console.error("Error saving profile:", error);
            alert("An error occurred.");
        }
    };

    if (loading) return <div className="text-center p-5">Loading...</div>;

    return (
        <div className="container-fluid p-0">
            <h2 className="mb-4 fw-bold">My Profile</h2>

            <div className="row g-4">
                <div className="col-lg-4">
                    {/* Profile Card */}
                    <div className="card border-0 shadow-sm text-center p-4">
                        <div className="mb-3">
                            <img src={profileImage} className="rounded-circle img-thumbnail" alt="Profile" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        </div>
                        <h4 className="fw-bold mb-1">{userData.firstName} {userData.lastName}</h4>
                        <p className="text-muted mb-3">User</p>
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
                                <h5 className="fw-bold mb-0">{stats.totalTasks}</h5>
                                <small className="text-muted">Tasks</small>
                            </div>
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">{stats.rating}</h5>
                                <small className="text-muted">Rating</small>
                            </div>
                            <div className="text-center">
                                <h5 className="fw-bold mb-0">{stats.reviews}</h5>
                                <small className="text-muted">Reviews</small>
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={userData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={userData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            name="email"
                                            value={userData.email}
                                            disabled
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="+91 XXXXX XXXXX"
                                            name="phone"
                                            value={userData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Bio</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Tell us about yourself..."
                                        name="about"
                                        value={userData.about}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Address"
                                        name="address"
                                        value={userData.address}
                                        onChange={handleInputChange}
                                    />
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

export default Profile;
