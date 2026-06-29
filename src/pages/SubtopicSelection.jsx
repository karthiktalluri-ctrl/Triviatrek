import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { quizCategories } from '../data/quizData';

const SubtopicSelection = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    const categoryInfo = quizCategories.find(c => c.id === category);

    if (!categoryInfo) {
        navigate('/home');
        return null;
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/home')}
                    className="flex items-center space-x-2 mb-8 px-4 py-2 glass rounded-xl hover:bg-white/20 transition-all"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Topics</span>
                </motion.button>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block p-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6">
                        <span className="text-6xl">{categoryInfo.icon}</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">{categoryInfo.title}</h1>
                    <p className="text-xl text-gray-400">{categoryInfo.description}</p>
                    <p className="text-lg text-gray-500 mt-2">Choose a subtopic to start your quiz</p>
                </motion.div>

                {/* Subtopic Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryInfo.subtopics?.map((subtopic, index) => (
                        <motion.div
                            key={subtopic.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            onClick={() => navigate(`/quiz/${category}/${subtopic.id}`)}
                            className={`glass p-8 rounded-2xl cursor-pointer relative overflow-hidden group bg-gradient-to-br ${categoryInfo.gradient}`}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                            <div className="relative z-10">
                                <div className="text-5xl mb-4">{subtopic.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{subtopic.name}</h3>
                                <p className="text-gray-300 mb-4">{subtopic.description}</p>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="px-3 py-1 bg-white/20 rounded-full">20 Questions</span>
                                    <span className="text-white/80">30 sec each</span>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                        </motion.div>
                    ))}
                </div>

                {/* Full Topic Quiz Option */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12"
                >
                    <div className="glass p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Or take the full {categoryInfo.title} quiz</h3>
                        <p className="text-gray-400 mb-6">
                            Test your knowledge across all subtopics with 20 random questions
                        </p>
                        <button
                            onClick={() => navigate(`/quiz/${category}/all`)}
                            className="btn-primary px-8 py-3 text-lg"
                        >
                            Start Full Topic Quiz
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SubtopicSelection;
