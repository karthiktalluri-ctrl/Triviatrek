import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { quizData, quizCategories } from '../data/quizData';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
    const { category, subtopic } = useParams();
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [initialized, setInitialized] = useState(false);

    const categoryInfo = quizCategories.find((c) => c.id === category);
    const effectiveSubtopic = subtopic || 'all';

    // Nicely formatted label for subtopic / mode
    const subtopicLabel =
        effectiveSubtopic === 'all'
            ? 'Full Topic'
            : categoryInfo?.subtopics?.find((s) => s.id === effectiveSubtopic)?.name ||
            effectiveSubtopic;

    useEffect(() => {
        setInitialized(false);

        if (!category) {
            navigate('/home');
            return;
        }

        const categoryData = quizData[category];

        if (!categoryData) {
            setQuizQuestions([]);
            setInitialized(true);
            return;
        }

        let allQuestions = [];

        if (effectiveSubtopic === 'all') {
            if (Array.isArray(categoryData)) {
                allQuestions = categoryData;
            } else {
                Object.values(categoryData).forEach((subArr) => {
                    if (Array.isArray(subArr)) {
                        allQuestions = [...allQuestions, ...subArr];
                    }
                });
            }
        } else {
            if (Array.isArray(categoryData)) {
                allQuestions = categoryData;
            } else {
                allQuestions = categoryData[effectiveSubtopic] || [];
            }
        }

        if (!allQuestions || allQuestions.length === 0) {
            setQuizQuestions([]);
            setInitialized(true);
            return;
        }

        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(20, allQuestions.length));

        setQuizQuestions(selected);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setUserAnswers([]);
        setScore(0);
        setInitialized(true);
    }, [category, effectiveSubtopic, navigate]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleSelectAnswer = (answerIndex) => {
        if (!currentQuestion) return;

        setSelectedAnswer(answerIndex);
        setShowResult(true);

        const isCorrect = answerIndex === currentQuestion.correctAnswer;
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }

        setUserAnswers((prev) => [
            ...prev,
            {
                questionId: currentQuestion.id,
                selectedAnswer: answerIndex,
                correctAnswer: currentQuestion.correctAnswer,
                isCorrect
            }
        ]);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            navigate('/results', {
                state: {
                    category,
                    score,
                    totalQuestions: quizQuestions.length,
                    userAnswers,
                    questions: quizQuestions
                }
            });
        }
    };

    const handleTimeout = () => {
        if (!showResult && currentQuestion) {
            setShowResult(true);
            setUserAnswers((prev) => [
                ...prev,
                {
                    questionId: currentQuestion.id,
                    selectedAnswer: null,
                    correctAnswer: currentQuestion.correctAnswer,
                    isCorrect: false
                }
            ]);
        }
    };

    // While loading / initializing
    if (!initialized) {
        return null;
    }

    // If no questions after loading
    if (!quizQuestions || quizQuestions.length === 0) {
        return (
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        {categoryInfo?.title || 'Quiz'}
                    </h1>
                    <p className="text-gray-400 mb-6">
                        No questions are available for this category yet.
                    </p>
                    <button
                        onClick={() => navigate('/home')}
                        className="btn-primary px-6 py-2"
                    >
                        Back to Topics
                    </button>
                </div>
            </div>
        );
    }

    const totalQuestions = quizQuestions.length;
    const currentNumber = currentQuestionIndex + 1;

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-5xl">{categoryInfo?.icon}</span>
                            <div>
                                <h1 className="text-3xl font-bold">{categoryInfo?.title}</h1>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {categoryInfo?.description}
                                </p>
                            </div>
                        </div>

                        {/* Small meta card: category + subtopic + question counter */}
                        <div className="glass px-4 py-3 rounded-xl text-sm flex flex-col gap-1">
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold">Mode</span>
                                <span className="px-2 py-1 rounded-full text-xs bg-white/10 dark:bg-black/20">
                                    {subtopicLabel}
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold">Question</span>
                                <span className="text-xs">
                                    {currentNumber} / {totalQuestions}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Progress and Timer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <ProgressBar current={currentNumber} total={totalQuestions} />
                    <Timer
                        duration={30}
                        onTimeout={handleTimeout}
                        isActive={!showResult}
                        key={currentQuestionIndex}
                    />
                </div>

                {/* Score */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-4 rounded-xl mb-8 text-center"
                >
                    <div className="text-sm text-gray-400 dark:text-gray-300 mb-1">
                        Current Score
                    </div>
                    <div className="text-3xl font-bold text-gradient">
                        {score} / {currentQuestionIndex + (showResult ? 1 : 0)}
                    </div>
                </motion.div>

                {/* Question */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <QuestionCard
                            question={currentQuestion}
                            selectedAnswer={selectedAnswer}
                            onSelectAnswer={handleSelectAnswer}
                            showResult={showResult}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Explanation panel – shows only after answering / timeout */}
                {showResult && currentQuestion?.explanation && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                    >
                        <div className="glass p-4 rounded-xl flex items-start gap-3 border border-white/10 dark:border-gray-700">
                            <div className="mt-1">
                                <Info className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                            </div>
                            <div>
                                <h2 className="font-semibold mb-1 text-gray-100 dark:text-gray-50">
                                    Explanation
                                </h2>
                                <p className="text-sm text-gray-200 dark:text-gray-300 leading-relaxed">
                                    {currentQuestion.explanation}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Next Button */}
                {showResult && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 flex justify-end"
                    >
                        <button
                            onClick={handleNext}
                            className="btn-primary flex items-center space-x-2"
                        >
                            <span>
                                {currentQuestionIndex < quizQuestions.length - 1
                                    ? 'Next Question'
                                    : 'View Results'}
                            </span>
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
