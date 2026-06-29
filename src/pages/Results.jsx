import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, Home, Check, X } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';
import { quizCategories } from '../data/quizData';
import { useEffect } from 'react';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { saveQuizResult } = useQuiz();

    const { category, score, totalQuestions, userAnswers, questions } = location.state || {};

    useEffect(() => {
        if (!category || score === undefined) {
            navigate('/');
            return;
        }

        // Save result to localStorage
        const percentage = Math.round((score / totalQuestions) * 100);
        saveQuizResult({
            category,
            score: percentage,
            correctAnswers: score,
            totalQuestions
        });
    }, [category, score, totalQuestions, saveQuizResult, navigate]);

    if (!category) {
        return null;
    }

    const categoryInfo = quizCategories.find(c => c.id === category);
    const percentage = Math.round((score / totalQuestions) * 100);

    const getGrade = (percent) => {
        if (percent >= 90) return { grade: 'A+', message: 'Outstanding!', color: 'text-green-400' };
        if (percent >= 80) return { grade: 'A', message: 'Excellent!', color: 'text-green-400' };
        if (percent >= 70) return { grade: 'B', message: 'Great Job!', color: 'text-blue-400' };
        if (percent >= 60) return { grade: 'C', message: 'Good Effort!', color: 'text-yellow-400' };
        if (percent >= 50) return { grade: 'D', message: 'Keep Practicing!', color: 'text-orange-400' };
        return { grade: 'F', message: 'Try Again!', color: 'text-red-400' };
    };

    const gradeInfo = getGrade(percentage);

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Score Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.8 }}
                    className="glass p-8 rounded-3xl mb-8 text-center relative overflow-hidden"
                >
                    {/* Background Decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            className="inline-block mb-4"
                        >
                            <Trophy size={80} className="text-yellow-400" />
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiz Complete!</h1>

                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <span className="text-5xl">{categoryInfo?.icon}</span>
                            <h2 className="text-2xl md:text-3xl font-semibold">{categoryInfo?.title}</h2>
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="mb-6"
                        >
                            <div className={`text-8xl md:text-9xl font-bold ${gradeInfo.color} mb-2`}>
                                {percentage}%
                            </div>
                            <div className="text-3xl font-bold mb-2">{gradeInfo.grade}</div>
                            <div className="text-xl text-gray-400">{gradeInfo.message}</div>
                        </motion.div>

                        <div className="text-2xl mb-8">
                            <span className="font-bold text-green-400">{score}</span>
                            <span className="text-gray-400"> / </span>
                            <span className="font-bold">{totalQuestions}</span>
                            <span className="text-gray-400"> correct</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => navigate(`/quiz/${category}`)}
                                className="btn-primary flex items-center space-x-2"
                            >
                                <RotateCcw size={20} />
                                <span>Retry Quiz</span>
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="btn-secondary flex items-center space-x-2"
                            >
                                <Home size={20} />
                                <span>Home</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Detailed Review */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Review Answers</h2>

                    <div className="space-y-6">
                        {questions.map((question, index) => {
                            const userAnswer = userAnswers[index];
                            const isCorrect = userAnswer?.isCorrect;

                            return (
                                <motion.div
                                    key={question.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                    className={`glass p-6 rounded-2xl border-l-4 ${isCorrect ? 'border-green-400' : 'border-red-400'
                                        }`}
                                >
                                    {/* Question Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <span className="font-bold text-gray-400">Question {index + 1}</span>
                                                {isCorrect ? (
                                                    <div className="flex items-center space-x-1 text-green-400">
                                                        <Check size={20} />
                                                        <span className="text-sm font-semibold">Correct</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center space-x-1 text-red-400">
                                                        <X size={20} />
                                                        <span className="text-sm font-semibold">Incorrect</span>
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
                                        </div>
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-2 mb-4">
                                        {question.options.map((option, optIndex) => {
                                            const isUserAnswer = userAnswer?.selectedAnswer === optIndex;
                                            const isCorrectAnswer = optIndex === question.correctAnswer;

                                            return (
                                                <div
                                                    key={optIndex}
                                                    className={`p-3 rounded-lg flex items-center space-x-3 ${isCorrectAnswer ? 'bg-green-500/20 border-2 border-green-400' :
                                                            isUserAnswer && !isCorrect ? 'bg-red-500/20 border-2 border-red-400' :
                                                                'bg-white/5'
                                                        }`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${isCorrectAnswer ? 'bg-green-500' :
                                                            isUserAnswer && !isCorrect ? 'bg-red-500' :
                                                                'bg-white/10'
                                                        }`}>
                                                        {String.fromCharCode(65 + optIndex)}
                                                    </div>
                                                    <span className="flex-1">{option}</span>
                                                    {isCorrectAnswer && <Check size={20} className="text-green-400" />}
                                                    {isUserAnswer && !isCorrect && <X size={20} className="text-red-400" />}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Explanation */}
                                    <div className="glass-dark p-4 rounded-xl border-l-4 border-blue-400">
                                        <h4 className="font-bold mb-2 text-blue-400">Explanation:</h4>
                                        <p className="text-gray-300">{question.explanation}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom Actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <button
                        onClick={() => navigate(`/quiz/${category}`)}
                        className="btn-primary flex items-center space-x-2"
                    >
                        <RotateCcw size={20} />
                        <span>Retry Quiz</span>
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="btn-secondary flex items-center space-x-2"
                    >
                        <Home size={20} />
                        <span>Take Another Quiz</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Results;
