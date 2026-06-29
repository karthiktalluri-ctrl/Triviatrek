import { motion } from 'framer-motion';
import { Trophy, Clock, TrendingUp } from 'lucide-react';
import { quizCategories } from '../data/quizData';
import { useQuiz } from '../context/QuizContext';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
    const { quizHistory } = useQuiz();

    const totalQuizzes = quizHistory.length;
    const averageScore = quizHistory.length > 0
        ? Math.round(quizHistory.reduce((acc, quiz) => acc + quiz.score, 0) / quizHistory.length)
        : 0;

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #00f0ff, #bf00ff, #ff00bf, #00f0ff)',
                            backgroundSize: '200% 200%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        TriviaTrek
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-8">
                        Test your knowledge across 10 exciting categories
                    </p>

                    {/* Stats */}
                    {totalQuizzes > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-wrap justify-center gap-4 mb-8"
                        >
                            <div className="glass px-6 py-3 rounded-xl flex items-center space-x-2">
                                <Trophy className="text-yellow-400" size={24} />
                                <div className="text-left">
                                    <div className="text-sm text-gray-400">Total Quizzes</div>
                                    <div className="text-2xl font-bold">{totalQuizzes}</div>
                                </div>
                            </div>
                            <div className="glass px-6 py-3 rounded-xl flex items-center space-x-2">
                                <TrendingUp className="text-green-400" size={24} />
                                <div className="text-left">
                                    <div className="text-sm text-gray-400">Average Score</div>
                                    <div className="text-2xl font-bold">{averageScore}%</div>
                                </div>
                            </div>
                            <div className="glass px-6 py-3 rounded-xl flex items-center space-x-2">
                                <Clock className="text-blue-400" size={24} />
                                <div className="text-left">
                                    <div className="text-sm text-gray-400">Questions per Quiz</div>
                                    <div className="text-2xl font-bold">20</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {quizCategories.map((category, index) => (
                        <CategoryCard key={category.id} category={category} index={index} />
                    ))}
                </div>

                {/* Recent History */}
                {quizHistory.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold mb-6">Recent Quizzes</h2>
                        <div className="glass p-6 rounded-2xl">
                            <div className="space-y-4">
                                {quizHistory.slice(-5).reverse().map((quiz, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 glass-dark rounded-xl hover:bg-white/5 transition-all"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="text-3xl">
                                                {quizCategories.find(c => c.id === quiz.category)?.icon}
                                            </div>
                                            <div>
                                                <div className="font-semibold">
                                                    {quizCategories.find(c => c.id === quiz.category)?.title}
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {new Date(quiz.timestamp).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-2xl font-bold ${quiz.score >= 80 ? 'text-green-400' :
                                                    quiz.score >= 60 ? 'text-yellow-400' :
                                                        'text-red-400'
                                                }`}>
                                                {quiz.score}%
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {quiz.correctAnswers}/{quiz.totalQuestions}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Home;
