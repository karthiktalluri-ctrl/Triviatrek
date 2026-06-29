// This file defines all categories used in Home + SubtopicSelection
// IDs here MUST match keys in quizData in quizData.js

export const quizCategories = [
    {
        id: 'sports',
        title: 'Sports',
        description: 'Latest events, records, World Cups, Olympics',
        icon: '⚽',
        gradient: 'from-orange-500 to-red-600',
        color: 'orange',
        subtopics: [
            {
                id: 'football',
                name: 'Football',
                icon: '⚽',
                description: 'World Cups, leagues, players, records'
            },
            {
                id: 'cricket',
                name: 'Cricket',
                icon: '🏏',
                description: 'World Cups, IPL, records, players'
            },
            {
                id: 'basketball',
                name: 'Basketball',
                icon: '🏀',
                description: 'NBA, records, legends, championships'
            }
        ]
    },

    {
        id: 'geopolitics',
        title: 'Geopolitics',
        description: 'G20, wars, alliances, elections, UN, NATO',
        icon: '🌍',
        gradient: 'from-blue-500 to-cyan-600',
        color: 'blue',
        subtopics: [
            {
                id: 'set1',
                name: 'Global Groups & Orgs',
                icon: '🌐',
                description: 'UN, NATO, G20, BRICS and more'
            },
            {
                id: 'set2',
                name: 'Leaders & Conflicts',
                icon: '🗳️',
                description: 'Elections, wars and diplomacy'
            }
        ]
    },

    {
        id: 'geography',
        title: 'Maps & Geography',
        description: 'Capitals, borders, flags, locations',
        icon: '🗺️',
        gradient: 'from-green-500 to-emerald-600',
        color: 'green',
        subtopics: [
            {
                id: 'set1',
                name: 'World Basics',
                icon: '🌎',
                description: 'Countries, rivers, mountains'
            },
            {
                id: 'set2',
                name: 'Capitals & Landmarks',
                icon: '📍',
                description: 'Cities, borders, famous places'
            }
        ]
    },

    {
        id: 'technology',
        title: 'Technology & AI',
        description: 'Latest inventions, companies, breakthroughs',
        icon: '💻',
        gradient: 'from-purple-500 to-pink-600',
        color: 'purple',
        subtopics: [
            {
                id: 'set1',
                name: 'Tech & Devices',
                icon: '📱',
                description: 'Phones, PCs, gadgets, internet'
            },
            {
                id: 'set2',
                name: 'AI & Companies',
                icon: '🧠',
                description: 'AI, cloud, big tech companies'
            }
        ]
    },

    {
        id: 'space',
        title: 'Space & Science',
        description: 'ISRO, NASA, SpaceX, discoveries',
        icon: '🚀',
        gradient: 'from-indigo-500 to-purple-600',
        color: 'indigo',
        subtopics: [
            {
                id: 'set1',
                name: 'Planets & Universe',
                icon: '🪐',
                description: 'Solar system, galaxies, basics'
            },
            {
                id: 'set2',
                name: 'Missions & Agencies',
                icon: '👨‍🚀',
                description: 'ISRO, NASA, SpaceX missions'
            }
        ]
    },

    {
        id: 'economy',
        title: 'World Economy & Stocks',
        description: 'Inflation, currencies, top companies',
        icon: '💰',
        gradient: 'from-yellow-500 to-orange-600',
        color: 'yellow',
        subtopics: [
            {
                id: 'set1',
                name: 'Money & Macroeconomy',
                icon: '📊',
                description: 'GDP, inflation, currencies'
            },
            {
                id: 'set2',
                name: 'Markets & Companies',
                icon: '🏦',
                description: 'Stock markets, firms, crypto'
            }
        ]
    },

    {
        id: 'environment',
        title: 'Environment & Climate',
        description: 'COP summits, global warming, wildlife',
        icon: '🌱',
        gradient: 'from-teal-500 to-green-600',
        color: 'teal',
        subtopics: [
            {
                id: 'set1',
                name: 'Climate & Pollution',
                icon: '🌡️',
                description: 'Global warming, greenhouse gases'
            },
            {
                id: 'set2',
                name: 'Ecosystems & Wildlife',
                icon: '🐾',
                description: 'Forests, oceans, biodiversity'
            }
        ]
    },

    {
        id: 'current-affairs',
        title: 'Current Affairs',
        description: 'Top weekly global news',
        icon: '📰',
        gradient: 'from-red-500 to-pink-600',
        color: 'red',
        subtopics: [
            {
                id: 'set1',
                name: 'World News 2023',
                icon: '📅',
                description: 'Major events from 2023'
            },
            {
                id: 'set2',
                name: 'World News 2024',
                icon: '🔥',
                description: 'Recent and ongoing events'
            }
        ]
    },

    {
        id: 'entertainment',
        title: 'Entertainment',
        description: 'Oscars, award shows, Netflix, trending artists',
        icon: '🎬',
        gradient: 'from-pink-500 to-rose-600',
        color: 'pink',
        subtopics: [
            {
                id: 'set1',
                name: 'Movies & Series',
                icon: '🎥',
                description: 'Hollywood, Netflix, blockbusters'
            },
            {
                id: 'set2',
                name: 'Music & Awards',
                icon: '🎵',
                description: 'Songs, artists, Grammys, Oscars'
            }
        ]
    },

    {
        id: 'history',
        title: 'History & Culture',
        description: 'UNESCO sites, historical events',
        icon: '🏛️',
        gradient: 'from-amber-500 to-yellow-600',
        color: 'amber',
        subtopics: [
            {
                id: 'set1',
                name: 'Ancient to Medieval',
                icon: '⚔️',
                description: 'Ancient empires, medieval events'
            },
            {
                id: 'set2',
                name: 'Modern History',
                icon: '📜',
                description: 'Revolutions, world wars, modern era'
            }
        ]
    }
];
