import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const QuestionCard = ({ question, selectedAnswer, onSelectAnswer, showResult }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass p-8 rounded-2xl"
        >
            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
                {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showIncorrect = showResult && isSelected && !isCorrect;

                    return (
                        <motion.button
                            key={index}
                            whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                            whileTap={!showResult ? { scale: 0.98 } : {}}
                            onClick={() => !showResult && onSelectAnswer(index)}
                            disabled={showResult}
                            className={`
                w-full p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden
                ${!showResult && 'hover:bg-white/10 cursor-pointer'}
                ${isSelected && !showResult && 'bg-white/20 border-2 border-blue-400'}
                ${showCorrect && 'bg-green-500/20 border-2 border-green-400'}
                ${showIncorrect && 'bg-red-500/20 border-2 border-red-400'}
                ${!isSelected && !showResult && 'glass border-2 border-white/20'}
                ${showResult && !isSelected && !isCorrect && 'opacity-50'}
              `}
                        >
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center space-x-4">
                                    {/* Option Letter */}
                                    <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg
                    ${showCorrect && 'bg-green-500'}
                    ${showIncorrect && 'bg-red-500'}
                    ${!showResult && isSelected && 'bg-blue-500'}
                    ${!showResult && !isSelected && 'bg-white/10'}
                  `}>
                                        {String.fromCharCode(65 + index)}
                                    </div>

                                    {/* Option Text */}
                                    <span className="text-lg">{option}</span>
                                </div>

                                {/* Result Icons */}
                                {showCorrect && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="bg-green-500 rounded-full p-1"
                                    >
                                        <Check size={24} />
                                    </motion.div>
                                )}
                                {showIncorrect && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="bg-red-500 rounded-full p-1"
                                    >
                                        <X size={24} />
                                    </motion.div>
                                )}
                            </div>

                            {/* Glow Effect for Selected */}
                            {isSelected && !showResult && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10" />
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Explanation */}
            {showResult && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 glass-dark rounded-xl border-l-4 border-blue-400"
                >
                    <h3 className="font-bold mb-2 text-blue-400">Explanation:</h3>
                    <p className="text-gray-300">{question.explanation}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default QuestionCard;
