import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Timer = ({ duration = 30, onTimeout, isActive }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        if (!isActive) return;

        if (timeLeft <= 0) {
            onTimeout();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeout, isActive]);

    const percentage = (timeLeft / duration) * 100;
    const isWarning = timeLeft <= 10;

    return (
        <div className="glass p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <Clock size={20} className={isWarning ? 'text-red-400 animate-pulse' : 'text-blue-400'} />
                    <span className="font-semibold">Time Left</span>
                </div>
                <motion.span
                    className={`text-2xl font-bold ${isWarning ? 'text-red-400' : 'text-blue-400'}`}
                    animate={isWarning ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                >
                    {timeLeft}s
                </motion.span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${isWarning ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}
                    initial={{ width: '100%' }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};

export default Timer;
