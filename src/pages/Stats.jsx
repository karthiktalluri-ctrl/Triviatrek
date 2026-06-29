import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import { quizCategories } from '../data/quizData';
import { Trophy, TrendingUp, Target, Clock, Award, BarChart3 } from 'lucide-react';

const Stats = () => {
    const { quizHistory } = useQuiz();

    // Calculate statistics
    const totalQuizzes = quizHistory.length;
    const averageScore = quizHistory.length > 0
        ? Math.round(quizHistory.reduce((acc, quiz) => acc + quiz.score, 0) / quizHistory.length)
        : 0;

    const bestScore = quizHistory.length > 0
        ? Math.max(...quizHistory.map(q => q.score))
        : 0;

    const totalQuestions = quizHistory.reduce((acc, quiz) => acc + quiz.totalQuestions, 0);
    const totalCorrect = quizHistory.reduce((acc, quiz) => acc + quiz.correctAnswers, 0);

    // Category breakdown
    const categoryStats = quizCategories.map(cat => {
        const categoryQuizzes = quizHistory.filter(q => q.category === cat.id);
        const avgScore = categoryQuizzes.length > 0
            ? Math.round(categoryQuizzes.reduce((acc, q) => acc + q.score, 0) / categoryQuizzes.length)
            : 0;

        return {
            ...cat,
            attempts: categoryQuizzes.length,
            avgScore
        };
    }).filter(cat => cat.attempts > 0);

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
                        <BarChart3 size={48} />
                    </div>
                    <h1 className="text-5xl font-bold mb-4">Your Statistics</h1>
                    <p className="text-xl text-gray-400">
                        Track your progress and performance
                    </p>
                </motion.div>

                {totalQuizzes === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass p-12 rounded-3xl text-center"
                    >
                        <Trophy size={80} className="mx-auto mb-6 text-gray-400" />
                        <h2 className="text-3xl font-bold mb-4">No Quizzes Yet!</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Start taking quizzes to see your statistics here
                        </p>
                        <button
                            onClick={() => window.location.href = '/home'}
                            className="btn-primary px-8 py-3"
                        >
                            Take Your First Quiz
                        </button>
                    </motion.div>
                ) : (
                    <>
                        {/* Overview Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {[
                                {
                                    icon: <Trophy className="text-yellow-400" size={32} />,
                                    label: 'Total Quizzes',
                                    value: totalQuizzes,
                                    color: 'from-yellow-500 to-orange-500'
                                },
                                {
                                    icon: <TrendingUp className="text-green-400" size={32} />,
                                    label: 'Average Score',
                                    value: `${averageScore}%`,
                                    color: 'from-green-500 to-emerald-500'
                                },
                                {
                                    icon: <Award className="text-purple-400" size={32} />,
                                    label: 'Best Score',
                                    value: `${bestScore}%`,
                                    color: 'from-purple-500 to-pink-500'
                                },
                                {
                                    icon: <Target className="text-blue-400" size={32} />,
                                    label: 'Accuracy',
                                    value: `${Math.round((totalCorrect / totalQuestions) * 100)}%`,
                                    color: 'from-blue-500 to-cyan-500'
                                }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass p-6 rounded-2xl relative overflow-hidden group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            {stat.icon}
                                            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                {stat.value}
                                            </div>
                                        </div>
                                        <div className="text-gray-400 font-semibold">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Category Breakdown */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass p-8 rounded-2xl mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
                                <BarChart3 size={32} className="text-blue-400" />
                                <span>Performance by Category</span>
                            </h2>

                            <div className="space-y-4">
                                {categoryStats.map((cat, index) => (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        className="glass-dark p-4 rounded-xl"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-3xl">{cat.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-lg">{cat.title}</h3>
                                                    <p className="text-sm text-gray-400">{cat.attempts} attempts</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`text-2xl font-bold ${cat.avgScore >= 80 ? 'text-green-400' :
                                                        cat.avgScore >= 60 ? 'text-yellow-400' :
                                                            'text-red-400'
                                                    }`}>
                                                    {cat.avgScore}%
                                                </div>
                                                <div className="text-sm text-gray-400">avg score</div>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${cat.avgScore}%` }}
                                                transition={{ duration: 1, delay: 0.6 + index * 0.05 }}
                                                className={`h-full ${cat.avgScore >= 80 ? 'bg-green-500' :
                                                        cat.avgScore >= 60 ? 'bg-yellow-500' :
                                                            'bg-red-500'
                                                    }`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Recent Activity */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="glass p-8 rounded-2xl"
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
                                <Clock size={32} className="text-purple-400" />
                                <span>Recent Activity</span>
                            </h2>

                            <div className="space-y-4">
                                {quizHistory.slice(-10).reverse().map((quiz, index) => {
                                    const category = quizCategories.find(c => c.id === quiz.category);
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 + index * 0.03 }}
                                            className="glass-dark p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-all"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="text-3xl">{category?.icon}</div>
                                                <div>
                                                    <div className="font-semibold">{category?.title}</div>
                                                    <div className="text-sm text-gray-400">
                                                        {new Date(quiz.timestamp).toLocaleDateString()} • {new Date(quiz.timestamp).toLocaleTimeString()}
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
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Stats;
