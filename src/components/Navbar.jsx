import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Home, BookOpen, BarChart3, Info, LogOut, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const { user, logout, isAuthenticated } = useAuth();
    const location = useLocation();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const navLinks = [
        { path: '/home', label: 'Home', icon: <Home size={20} /> },
        { path: '/learning', label: 'Learning', icon: <BookOpen size={20} /> },
        { path: '/stats', label: 'Stats', icon: <BarChart3 size={20} /> },
        { path: '/about', label: 'About', icon: <Info size={20} /> }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="glass sticky top-0 z-50 border-b border-white/20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to={isAuthenticated ? "/home" : "/"} className="flex items-center space-x-2 group">
                        <div className="text-3xl group-hover:scale-110 transition-transform">🎯</div>
                        <span className="text-2xl font-bold text-gradient">TriviaTrek</span>
                    </Link>

                    {/* Navigation Links (only show when authenticated) */}
                    {isAuthenticated && (
                        <div className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${location.pathname === link.path
                                            ? 'bg-white/20 text-white'
                                            : 'hover:bg-white/10'
                                        }`}
                                >
                                    {link.icon}
                                    <span className="hidden lg:inline">{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-white/10 transition-all hover:rotate-180 duration-500"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-blue-400" />}
                        </button>

                        {/* User Profile (only show when authenticated) */}
                        {isAuthenticated && user && (
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-all"
                                >
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="hidden sm:inline font-semibold">{user.name}</span>
                                </button>

                                {/* Dropdown Menu */}
                                {showProfileMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute right-0 mt-2 w-48 glass-dark rounded-xl overflow-hidden border border-white/20"
                                    >
                                        <div className="p-4 border-b border-white/10">
                                            <div className="font-semibold">{user.name}</div>
                                            <div className="text-sm text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setShowProfileMenu(false);
                                            }}
                                            className="w-full px-4 py-3 text-left hover:bg-white/10 transition-all flex items-center space-x-2 text-red-400"
                                        >
                                            <LogOut size={18} />
                                            <span>Logout</span>
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
