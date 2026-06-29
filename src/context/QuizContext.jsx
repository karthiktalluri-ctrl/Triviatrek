import { createContext, useContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz must be used within QuizProvider');
    }
    return context;
};

export const QuizProvider = ({ children }) => {
    const [quizHistory, setQuizHistory] = useState([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem('quizHistory');
        if (savedHistory) {
            setQuizHistory(JSON.parse(savedHistory));
        }
    }, []);

    const saveQuizResult = (result) => {
        const newHistory = [...quizHistory, { ...result, timestamp: new Date().toISOString() }];
        setQuizHistory(newHistory);
        localStorage.setItem('quizHistory', JSON.stringify(newHistory));
    };

    const clearHistory = () => {
        setQuizHistory([]);
        localStorage.removeItem('quizHistory');
    };

    return (
        <QuizContext.Provider value={{ quizHistory, saveQuizResult, clearHistory }}>
            {children}
        </QuizContext.Provider>
    );
};
