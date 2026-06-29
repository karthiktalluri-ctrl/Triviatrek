import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ category, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${category.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={`glass p-6 rounded-2xl cursor-pointer card-hover relative overflow-hidden group`}
        >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 dark:text-gray-400 text-sm">
                    {category.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-gradient">Start Quiz</span>
                    <span className="ml-2">→</span>
                </div>
            </div>

            {/* Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity -z-10`} />
        </motion.div>
    );
};

export default CategoryCard;
