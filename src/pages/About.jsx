import { motion } from 'framer-motion';
import { Target, Users, Zap, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Target size={40} />,
            title: 'Our Mission',
            description: 'To make learning fun and accessible through interactive quizzes across diverse topics.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Users size={40} />,
            title: 'Community Driven',
            description: 'Built by learners, for learners. Join thousands of users improving their knowledge daily.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Zap size={40} />,
            title: 'Smart Learning',
            description: 'Adaptive quizzes with random questions ensure fresh challenges every time you play.',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const team = [
        { name: 'Development Team', role: 'Building the Future of Learning' },
        { name: 'Content Creators', role: 'Crafting Quality Questions' },
        { name: 'Community Managers', role: 'Supporting Our Users' }
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl font-bold mb-6 text-gradient">About TriviaTrek</h1>
                    <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
                        Your ultimate destination for knowledge mastery through interactive quizzes
                    </p>
                </motion.div>

                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 rounded-2xl mb-12"
                >
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <div className="space-y-4 text-lg text-gray-300">
                        <p>
                            TriviaTrek was born from a simple idea: learning should be engaging, challenging, and fun.
                            We noticed that traditional learning methods often felt monotonous and disconnected from real-world knowledge.
                        </p>
                        <p>
                            That's why we created a platform that combines the excitement of trivia with the depth of comprehensive learning.
                            With over 20 topics, 60+ subtopics, and thousands of carefully crafted questions, we're building the most
                            comprehensive quiz platform for curious minds.
                        </p>
                        <p>
                            Whether you're a sports enthusiast, tech geek, geography buff, or history lover, TriviaTrek has something for everyone.
                            Our adaptive quiz system ensures you're always challenged, while detailed explanations help you learn from every question.
                        </p>
                    </div>
                </motion.div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform"
                            >
                                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass p-8 rounded-2xl mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <div key={index} className="glass-dark p-6 rounded-xl text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4 flex items-center justify-center text-3xl">
                                    👥
                                </div>
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass p-8 rounded-2xl text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Have questions or feedback? We'd love to hear from you!
                    </p>

                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="mailto:contact@triviatrek.com" className="p-4 glass-dark rounded-xl hover:scale-110 transition-transform">
                            <Mail size={32} className="text-blue-400" />
                        </a>
                        <a href="#" className="p-4 glass-dark rounded-xl hover:scale-110 transition-transform">
                            <Twitter size={32} className="text-blue-400" />
                        </a>
                        <a href="#" className="p-4 glass-dark rounded-xl hover:scale-110 transition-transform">
                            <Github size={32} className="text-gray-400" />
                        </a>
                        <a href="#" className="p-4 glass-dark rounded-xl hover:scale-110 transition-transform">
                            <Linkedin size={32} className="text-blue-400" />
                        </a>
                    </div>

                    <p className="text-gray-400">
                        Email: <a href="mailto:contact@triviatrek.com" className="text-blue-400 hover:underline">contact@triviatrek.com</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
