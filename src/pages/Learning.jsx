import { motion } from 'framer-motion';
import { Book, Video, FileText, Download, Lightbulb, TrendingUp } from 'lucide-react';

const Learning = () => {
    const resources = [
        {
            category: 'Sports',
            icon: '⚽',
            materials: [
                { title: 'Football History & Rules', type: 'article', icon: <FileText size={20} /> },
                { title: 'Cricket Basics Tutorial', type: 'video', icon: <Video size={20} /> },
                { title: 'Basketball Techniques Guide', type: 'pdf', icon: <Download size={20} /> }
            ]
        },
        {
            category: 'Technology',
            icon: '💻',
            materials: [
                { title: 'Introduction to AI', type: 'article', icon: <FileText size={20} /> },
                { title: 'Programming Fundamentals', type: 'video', icon: <Video size={20} /> },
                { title: 'Tech Trends 2024', type: 'pdf', icon: <Download size={20} /> }
            ]
        },
        {
            category: 'Geography',
            icon: '🗺️',
            materials: [
                { title: 'World Capitals Guide', type: 'article', icon: <FileText size={20} /> },
                { title: 'Rivers & Mountains Tour', type: 'video', icon: <Video size={20} /> },
                { title: 'Country Flags Reference', type: 'pdf', icon: <Download size={20} /> }
            ]
        }
    ];

    const tips = [
        'Take quizzes regularly to reinforce learning',
        'Focus on one subtopic at a time for better retention',
        'Review explanations after each quiz',
        'Track your progress in the Stats page',
        'Challenge yourself with full topic quizzes'
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block p-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-4">
                        <Book size={48} />
                    </div>
                    <h1 className="text-5xl font-bold mb-4">Learning Center</h1>
                    <p className="text-xl text-gray-400">
                        Enhance your knowledge with curated resources
                    </p>
                </motion.div>

                {/* Quick Tips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 rounded-2xl mb-12"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <Lightbulb className="text-yellow-400" size={32} />
                        <h2 className="text-3xl font-bold">Learning Tips</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="glass-dark p-4 rounded-xl flex items-start space-x-3"
                            >
                                <TrendingUp className="text-green-400 flex-shrink-0 mt-1" size={20} />
                                <p className="text-gray-300">{tip}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Learning Resources */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-6">Study Materials</h2>

                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="glass p-6 rounded-2xl"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-4xl">{resource.icon}</span>
                                <h3 className="text-2xl font-bold">{resource.category}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {resource.materials.map((material, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="glass-dark p-4 rounded-xl cursor-pointer group"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                                {material.icon}
                                            </div>
                                            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                                                {material.type}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold group-hover:text-blue-400 transition-colors">
                                            {material.title}
                                        </h4>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Coming Soon */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center glass p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold mb-4">More Resources Coming Soon!</h3>
                    <p className="text-gray-400">
                        We're constantly adding new study materials, videos, and interactive content.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Learning;
