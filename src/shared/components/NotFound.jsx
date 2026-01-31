import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
        }}>
            <h1 style={{ fontSize: '6rem', margin: '0', color: '#1e293b' }}>404</h1>
            <h2 style={{ fontSize: '2rem', margin: '1rem 0', color: '#475569' }}>Page Not Found</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <button 
                onClick={() => navigate('/')}
                style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
                Back to Home
            </button>
        </div>
    );
};

export default NotFound;
