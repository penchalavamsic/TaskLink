import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="landing-page">
            <h1 className="landing-title">TaskLink</h1>
        </div>
    );
};

export default LandingPage;
