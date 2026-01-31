import React from 'react';

/**
 * AuthGuard - Prevents unauthorized access to protected routes
 */
export const AuthGuard = ({ children }) => {
    const isAuthenticated = true; // Placeholder logic
    return isAuthenticated ? children : <div>Redirect to Login</div>;
};

/**
 * RoleGuard - Restricts access based on user role
 */
export const RoleGuard = ({ children, allowedRoles }) => {
    const userRole = 'admin'; // Placeholder logic
    return allowedRoles.includes(userRole) ? children : <div>Access Denied</div>;
};
