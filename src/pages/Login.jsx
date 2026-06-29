import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            login(formData.email, formData.password);
        } else {
            signup(formData.name, formData.email, formData.password);
        }

        navigate('/home');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="glass p-8 rounded-3xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', duration: 0.6 }}
                            className="inline-block p-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-4"
                        >
                            {isLogin ? <LogIn size={40} /> : <UserPlus size={40} />}
                        </motion.div>
                        <h2 className="text-3xl font-bold mb-2">
                            {isLogin ? 'Welcome Back!' : 'Create Account'}
                        </h2>
                        <p className="text-gray-400">
                            {isLogin ? 'Login to continue your learning journey' : 'Start your trivia adventure today'}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field (Signup only) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-semibold mb-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-12 py-3 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full btn-primary py-3 text-lg font-semibold"
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    {/* Toggle Login/Signup */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-400">
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}
                            {' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>

                    {/* Demo Note */}
                    <div className="mt-6 p-4 glass-dark rounded-xl text-center text-sm text-gray-400">
                        <p>Demo Mode: Use any email/password to login</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
