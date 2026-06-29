import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for saved user in localStorage
        const savedUser = localStorage.getItem('triviatrek_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock authentication - in production, this would call an API
        const mockUser = {
            id: Date.now(),
            name: email.split('@')[0],
            email,
            avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`,
            joinedDate: new Date().toISOString()
        };

        setUser(mockUser);
        localStorage.setItem('triviatrek_user', JSON.stringify(mockUser));
        return { success: true };
    };

    const signup = (name, email, password) => {
        // Mock signup - in production, this would call an API
        const mockUser = {
            id: Date.now(),
            name,
            email,
            avatar: `https://ui-avatars.com/api/?name=${name}&background=random`,
            joinedDate: new Date().toISOString()
        };

        setUser(mockUser);
        localStorage.setItem('triviatrek_user', JSON.stringify(mockUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('triviatrek_user');
    };

    const value = {
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
