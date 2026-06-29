import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trophy, Brain, TrendingUp, Users, ArrowRight, Star, Zap, Target } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: <Brain size={40} />,
            title: '20+ Topics',
            description: 'Diverse categories from Sports to Technology',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Target size={40} />,
            title: 'Subtopic Mastery',
            description: 'Deep dive into specific areas like Football, Cricket, AI',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Zap size={40} />,
            title: 'Smart Quizzes',
            description: '20 random questions from 50+ question bank',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: <TrendingUp size={40} />,
            title: 'Track Progress',
            description: 'Detailed analytics and performance insights',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center mb-6">
                            <Trophy size={60} className="text-yellow-400 mr-4" />
                            <h1 className="text-6xl md:text-8xl font-bold text-gradient">
                                TriviaTrek
                            </h1>
                        </div>

                        <p className="text-2xl md:text-3xl mb-8 text-gray-300 dark:text-gray-400">
                            Master Knowledge Across 20+ Topics
                        </p>

                        <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
                            Challenge yourself with thousands of questions, track your progress, and become a trivia master. From Sports to Technology, Geography to Entertainment - your learning journey starts here.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/login')}
                                className="btn-primary text-xl px-8 py-4 flex items-center space-x-2"
                            >
                                <span>Get Started</span>
                                <ArrowRight size={24} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/about')}
                                className="btn-secondary text-xl px-8 py-4"
                            >
                                Learn More
                            </motion.button>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                        >
                            {[
                                { label: 'Topics', value: '20+' },
                                { label: 'Subtopics', value: '60+' },
                                { label: 'Questions', value: '3000+' },
                                { label: 'Users', value: '10K+' }
                            ].map((stat, index) => (
                                <div key={index} className="glass p-6 rounded-xl">
                                    <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4">Why Choose TriviaTrek?</h2>
                        <p className="text-xl text-gray-400">Everything you need to master trivia</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass p-8 rounded-2xl relative overflow-hidden group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                <div className="relative z-10">
                                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass p-12 rounded-3xl text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                    <div className="relative z-10">
                        <Star size={60} className="mx-auto mb-6 text-yellow-400" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Test Your Knowledge?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of learners and start your trivia journey today
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/login')}
                            className="btn-primary text-xl px-12 py-4 flex items-center space-x-2 mx-auto"
                        >
                            <span>Start Learning Now</span>
                            <ArrowRight size={24} />
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Landing;
