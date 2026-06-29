import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="glass p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Progress</span>
                <span className="text-sm text-gray-400">
                    Question {current} of {total}
                </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>

            {/* Percentage */}
            <div className="mt-2 text-right text-sm text-gray-400">
                {Math.round(percentage)}% Complete
            </div>
        </div>
    );
};

export default ProgressBar;
