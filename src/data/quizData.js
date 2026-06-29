// Re-export categories so other files can import from this file
export { quizCategories } from './quizCategories';

// Small demo quiz data – few questions per subtopic, with explanations
export const quizData = {
    // ========= SPORTS =========
    sports: {
        football: [
            {
                id: 1,
                question: "Who won the FIFA World Cup 2022?",
                options: ["Brazil", "Argentina", "France", "Germany"],
                correctAnswer: 1,
                explanation: "Argentina won the 2022 FIFA World Cup in Qatar by beating France on penalties."
            },
            {
                id: 2,
                question: "Which country hosted the 2022 World Cup?",
                options: ["Russia", "Qatar", "USA", "Brazil"],
                correctAnswer: 1,
                explanation: "The 2022 World Cup was hosted by Qatar, the first World Cup in the Middle East."
            },
            {
                id: 3,
                question: "Which club won the 2023 UEFA Champions League?",
                options: ["Real Madrid", "Manchester City", "PSG", "Bayern"],
                correctAnswer: 1,
                explanation: "Manchester City won the 2023 UEFA Champions League, completing their historic treble."
            }
        ],
        cricket: [
            {
                id: 1,
                question: "Which country won the 2023 Cricket World Cup?",
                options: ["India", "Australia", "England", "New Zealand"],
                correctAnswer: 1,
                explanation: "Australia defeated India in the final to win the 2023 Cricket World Cup."
            },
            {
                id: 2,
                question: "Who is called the 'God of Cricket'?",
                options: ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma", "MS Dhoni"],
                correctAnswer: 1,
                explanation: "Sachin Tendulkar is popularly known as the 'God of Cricket'."
            },
            {
                id: 3,
                question: "Which league is based in India?",
                options: ["BBL", "CPL", "IPL", "PSL"],
                correctAnswer: 2,
                explanation: "The Indian Premier League (IPL) is the T20 cricket league based in India."
            }
        ],
        basketball: [
            {
                id: 1,
                question: "Who is the all-time leading scorer in the NBA?",
                options: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Kareem"],
                correctAnswer: 1,
                explanation: "LeBron James passed Kareem Abdul-Jabbar to become the NBA's all-time leading scorer."
            },
            {
                id: 2,
                question: "Which team won the 2024 NBA title?",
                options: ["Heat", "Lakers", "Celtics", "Nuggets"],
                correctAnswer: 2,
                explanation: "The Boston Celtics won the 2024 NBA Championship."
            },
            {
                id: 3,
                question: "Which league is based in North America?",
                options: ["NBA", "EuroLeague", "CBA", "ISL"],
                correctAnswer: 0,
                explanation: "The NBA (National Basketball Association) is based in North America."
            }
        ]
    },

    // ========= GEOPOLITICS =========
    geopolitics: {
        set1: [
            {
                id: 1,
                question: "How many member states are in the UN?",
                options: ["120", "150", "193", "210"],
                correctAnswer: 2,
                explanation: "The United Nations has 193 member states."
            },
            {
                id: 2,
                question: "What type of organisation is NATO?",
                options: ["Trade", "Military alliance", "Space", "Health"],
                correctAnswer: 1,
                explanation: "NATO is a collective defence military alliance."
            },
            {
                id: 3,
                question: "Where is the UN Headquarters?",
                options: ["Geneva", "London", "New York", "Paris"],
                correctAnswer: 2,
                explanation: "The main UN Headquarters are in New York City, USA."
            }
        ],
        set2: [
            {
                id: 4,
                question: "What does G20 mainly deal with?",
                options: ["Sports", "Economy & finance", "Education", "Environment"],
                correctAnswer: 1,
                explanation: "The G20 focuses on global economic and financial issues."
            },
            {
                id: 5,
                question: "BRICS originally had how many members?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2,
                explanation: "BRICS started with 5 countries: Brazil, Russia, India, China and South Africa."
            },
            {
                id: 6,
                question: "Which country left the EU (Brexit)?",
                options: ["France", "Germany", "United Kingdom", "Italy"],
                correctAnswer: 2,
                explanation: "The United Kingdom left the European Union in 2020 (Brexit)."
            }
        ]
    },

    // ========= GEOGRAPHY =========
    geography: {
        set1: [
            {
                id: 1,
                question: "What is the capital of Canada?",
                options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
                correctAnswer: 1,
                explanation: "Ottawa is the capital city of Canada."
            },
            {
                id: 2,
                question: "Which is the largest ocean?",
                options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                correctAnswer: 2,
                explanation: "The Pacific Ocean is the largest ocean on Earth."
            },
            {
                id: 3,
                question: "How many continents are commonly recognised?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2,
                explanation: "Seven continents are commonly recognised: Asia, Africa, North America, South America, Antarctica, Europe, Australia."
            }
        ],
        set2: [
            {
                id: 4,
                question: "Which is the smallest country by area?",
                options: ["Monaco", "Vatican City", "Malta", "Nauru"],
                correctAnswer: 1,
                explanation: "Vatican City is the smallest country by area."
            },
            {
                id: 5,
                question: "Which desert is the largest hot desert?",
                options: ["Gobi", "Sahara", "Kalahari", "Arabian"],
                correctAnswer: 1,
                explanation: "The Sahara Desert in Africa is the largest hot desert."
            },
            {
                id: 6,
                question: "Which river is often considered the longest?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correctAnswer: 1,
                explanation: "The Nile is traditionally considered the longest river, though some argue for the Amazon."
            }
        ]
    },

    // ========= TECHNOLOGY =========
    technology: {
        set1: [
            {
                id: 1,
                question: "What does AI stand for?",
                options: ["Auto Internet", "Artificial Intelligence", "Advanced Input", "Active Interface"],
                correctAnswer: 1,
                explanation: "AI stands for Artificial Intelligence."
            },
            {
                id: 2,
                question: "Which company developed Windows OS?",
                options: ["Apple", "Microsoft", "Google", "IBM"],
                correctAnswer: 1,
                explanation: "Microsoft develops and maintains the Windows operating system."
            },
            {
                id: 3,
                question: "Which company owns Android?",
                options: ["Apple", "Meta", "Google", "Samsung"],
                correctAnswer: 2,
                explanation: "Google owns and develops the Android operating system."
            }
        ],
        set2: [
            {
                id: 4,
                question: "What does URL stand for?",
                options: ["Uniform Resource Locator", "Universal Remote Link", "Unified Router List", "User Routing Layer"],
                correctAnswer: 0,
                explanation: "URL stands for Uniform Resource Locator."
            },
            {
                id: 5,
                question: "Which company owns Instagram?",
                options: ["Microsoft", "Meta", "Google", "Twitter"],
                correctAnswer: 1,
                explanation: "Meta (formerly Facebook) owns Instagram."
            },
            {
                id: 6,
                question: "VR stands for?",
                options: ["Virtual Reality", "Video Renderer", "Visual Router", "Voice Recognition"],
                correctAnswer: 0,
                explanation: "VR stands for Virtual Reality."
            }
        ]
    },

    // ========= SPACE =========
    space: {
        set1: [
            {
                id: 1,
                question: "Which planet is called the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                correctAnswer: 1,
                explanation: "Mars is known as the Red Planet due to its reddish surface."
            },
            {
                id: 2,
                question: "Which galaxy do we live in?",
                options: ["Andromeda", "Sombrero", "Milky Way", "Whirlpool"],
                correctAnswer: 2,
                explanation: "We live in the Milky Way galaxy."
            },
            {
                id: 3,
                question: "Who was the first person on the Moon?",
                options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
                correctAnswer: 0,
                explanation: "Neil Armstrong was the first human to walk on the Moon in 1969."
            }
        ],
        set2: [
            {
                id: 4,
                question: "Which space agency is from India?",
                options: ["NASA", "ESA", "ISRO", "JAXA"],
                correctAnswer: 2,
                explanation: "ISRO (Indian Space Research Organisation) is India's space agency."
            },
            {
                id: 5,
                question: "What is the Sun?",
                options: ["Planet", "Star", "Comet", "Asteroid"],
                correctAnswer: 1,
                explanation: "The Sun is a star at the centre of our solar system."
            },
            {
                id: 6,
                question: "Which telescope succeeded Hubble?",
                options: ["Kepler", "James Webb", "Spitzer", "Chandra"],
                correctAnswer: 1,
                explanation: "The James Webb Space Telescope is considered Hubble's scientific successor."
            }
        ]
    },

    // ========= ECONOMY =========
    economy: {
        set1: [
            {
                id: 1,
                question: "GDP stands for?",
                options: ["Gross Domestic Product", "Global Development Plan", "General Data Process", "Gross Demand Price"],
                correctAnswer: 0,
                explanation: "GDP stands for Gross Domestic Product."
            },
            {
                id: 2,
                question: "Which country has the largest economy by GDP?",
                options: ["China", "USA", "Japan", "Germany"],
                correctAnswer: 1,
                explanation: "The United States has the largest economy by nominal GDP."
            },
            {
                id: 3,
                question: "Currency of Japan?",
                options: ["Won", "Yuan", "Yen", "Ringgit"],
                correctAnswer: 2,
                explanation: "Japan uses the Yen (JPY) as its currency."
            }
        ],
        set2: [
            {
                id: 4,
                question: "What does IMF stand for?",
                options: ["International Monetary Fund", "International Money Forum", "Indian Monetary Fund", "Internal Market Fund"],
                correctAnswer: 0,
                explanation: "IMF stands for International Monetary Fund."
            },
            {
                id: 5,
                question: "Which is called 'digital gold'?",
                options: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"],
                correctAnswer: 2,
                explanation: "Bitcoin is often nicknamed 'digital gold'."
            },
            {
                id: 6,
                question: "Main world reserve currency?",
                options: ["Euro", "US Dollar", "Yen", "Pound"],
                correctAnswer: 1,
                explanation: "The US Dollar is the primary global reserve currency."
            }
        ]
    },

    // ========= ENVIRONMENT =========
    environment: {
        set1: [
            {
                id: 1,
                question: "Which gas is a major greenhouse gas?",
                options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
                correctAnswer: 2,
                explanation: "Carbon dioxide (CO₂) is a major greenhouse gas."
            },
            {
                id: 2,
                question: "Which forest is called Earth's lungs?",
                options: ["Congo", "Amazon", "Taiga", "Sundarbans"],
                correctAnswer: 1,
                explanation: "The Amazon rainforest is often called the lungs of the Earth."
            },
            {
                id: 3,
                question: "COP in climate meetings stands for?",
                options: ["Conference of Parties", "Council of Planets", "Climate Operation Plan", "Carbon Offset Program"],
                correctAnswer: 0,
                explanation: "COP stands for Conference of the Parties."
            }
        ],
        set2: [
            {
                id: 4,
                question: "Ozone layer is found in which layer?",
                options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                correctAnswer: 1,
                explanation: "The ozone layer is mainly found in the stratosphere."
            },
            {
                id: 5,
                question: "Main cause of deforestation?",
                options: ["Mining", "Agriculture", "Tourism", "Fishing"],
                correctAnswer: 1,
                explanation: "Agricultural expansion is the biggest driver of deforestation."
            },
            {
                id: 6,
                question: "WWF logo animal?",
                options: ["Tiger", "Panda", "Elephant", "Dolphin"],
                correctAnswer: 1,
                explanation: "The World Wide Fund for Nature (WWF) uses a panda as its logo."
            }
        ]
    },

    // ========= CURRENT AFFAIRS =========
    'current-affairs': {
        set1: [
            {
                id: 1,
                question: "Which country hosted G20 in 2023?",
                options: ["India", "Brazil", "Japan", "Italy"],
                correctAnswer: 0,
                explanation: "India hosted the G20 summit in 2023."
            },
            {
                id: 2,
                question: "Which platform was renamed to 'X'?",
                options: ["Facebook", "Instagram", "Twitter", "Snapchat"],
                correctAnswer: 2,
                explanation: "Twitter was rebranded as 'X' by Elon Musk."
            },
            {
                id: 3,
                question: "Which country launched Chandrayaan-3?",
                options: ["USA", "China", "India", "Russia"],
                correctAnswer: 2,
                explanation: "India's ISRO launched the Chandrayaan-3 lunar mission."
            }
        ],
        set2: [
            {
                id: 4,
                question: "Which city hosted the 2024 Olympics?",
                options: ["Tokyo", "Paris", "Los Angeles", "London"],
                correctAnswer: 1,
                explanation: "Paris hosted the 2024 Summer Olympics."
            },
            {
                id: 5,
                question: "Which AI company released GPT-4?",
                options: ["Google", "OpenAI", "Meta", "IBM"],
                correctAnswer: 1,
                explanation: "OpenAI released GPT-4."
            },
            {
                id: 6,
                question: "Which country joined NATO in 2024?",
                options: ["Sweden", "Finland", "Ukraine", "Georgia"],
                correctAnswer: 0,
                explanation: "Sweden became a NATO member in 2024."
            }
        ]
    },

    // ========= ENTERTAINMENT =========
    entertainment: {
        set1: [
            {
                id: 1,
                question: "Which film won Best Picture at Oscars 2024?",
                options: ["Barbie", "Oppenheimer", "Poor Things", "Killers of the Flower Moon"],
                correctAnswer: 1,
                explanation: "Oppenheimer won the Academy Award for Best Picture in 2024."
            },
            {
                id: 2,
                question: "Which artist did the Eras Tour?",
                options: ["Drake", "Taylor Swift", "The Weeknd", "Ed Sheeran"],
                correctAnswer: 1,
                explanation: "Taylor Swift's Eras Tour became the highest-grossing tour ever."
            },
            {
                id: 3,
                question: "Which service produced 'The Last of Us' series?",
                options: ["Netflix", "Amazon Prime", "HBO", "Disney+"],
                correctAnswer: 2,
                explanation: "HBO produced the series adaptation of 'The Last of Us'."
            }
        ],
        set2: [
            {
                id: 4,
                question: "Which movie was the top grosser of 2023?",
                options: ["Oppenheimer", "Barbie", "Avatar 2", "Guardians 3"],
                correctAnswer: 1,
                explanation: "Barbie was the highest-grossing film of 2023."
            },
            {
                id: 5,
                question: "Which awards are for music?",
                options: ["Oscars", "Grammys", "Emmys", "Tonys"],
                correctAnswer: 1,
                explanation: "The Grammy Awards honour achievements in the music industry."
            },
            {
                id: 6,
                question: "Which K-pop group headlined Coachella?",
                options: ["BTS", "BLACKPINK", "TWICE", "Stray Kids"],
                correctAnswer: 1,
                explanation: "BLACKPINK became the first K-pop group to headline Coachella."
            }
        ]
    },

    // ========= HISTORY =========
    history: {
        set1: [
            {
                id: 1,
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2,
                explanation: "World War II ended in 1945."
            },
            {
                id: 2,
                question: "Which ancient wonder still exists?",
                options: ["Colossus of Rhodes", "Hanging Gardens", "Lighthouse of Alexandria", "Great Pyramid of Giza"],
                correctAnswer: 3,
                explanation: "The Great Pyramid of Giza is the only surviving wonder of the ancient world."
            },
            {
                id: 3,
                question: "When did India gain independence?",
                options: ["1945", "1947", "1950", "1952"],
                correctAnswer: 1,
                explanation: "India became independent on 15 August 1947."
            }
        ],
        set2: [
            {
                id: 4,
                question: "Who was the first US President?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Lincoln"],
                correctAnswer: 1,
                explanation: "George Washington was the first President of the USA."
            },
            {
                id: 5,
                question: "The Berlin Wall fell in which year?",
                options: ["1985", "1987", "1989", "1991"],
                correctAnswer: 2,
                explanation: "The Berlin Wall fell in 1989, symbolising the end of the Cold War era."
            },
            {
                id: 6,
                question: "Who was the first person to walk on the Moon?",
                options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
                correctAnswer: 0,
                explanation: "Neil Armstrong was the first person to walk on the Moon."
            }
        ]
    }
};
