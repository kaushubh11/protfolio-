import {
    Home,
    User,
    Code,
    Award,
    Gamepad2,
    Mail,
    Rocket,
    Zap,
    Cpu,
    TrendingUp,
    Shield
} from 'lucide-react';

export const DATA = {
    PERSONAL: {
        NAME: "Kaushubh Chaudhary",
        TITLE: "Student | BSc Computing",
        BIO: "A highly motivated Second-Year BSc Computing student actively transforming academic concepts into practical digital skills. I am passionate about full-stack development, with core proficiency in Java, React, and Python, and a constant drive for learning new technologies in the ever-evolving tech landscape. Ready to contribute, build, and innovate.",
        EMAIL: "placeholder@example.com",
        LINKEDIN: "#",
        GITHUB: "https://github.com/kaushubh11",
    },
    SKILLS: [
        { name: 'HTML', level: 2 },
        { name: 'CSS', level: 2 },
        { name: 'JavaScript', level: 2 },
        { name: 'React', level: 1 },
        { name: 'Java', level: 2 },
        { name: 'Python', level: 2 },
        { name: 'Data Analysis', level: 2 },
        { name: 'Technical Literacy', level: 4 },
        { name: 'Learning Agility', level: 3 },
        { name: 'Communication', level: 3 },
    ],
    PROJECTS: [
        {
            id: 1,
            title: 'Secure Java Framework',
            description: 'A modular backend security layer implemented in Java, emphasizing robust input validation, secure session management, and role-based access control (RBAC).',
            tech: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
            link: '#',
        },
        {
            id: 2,
            title: 'React Task Manager',
            description: 'A responsive single-page application (SPA) for project management, featuring local state persistence and an intuitive drag-and-drop interface.',
            tech: ['React', 'JavaScript', 'CSS Modules', 'Local Storage'],
            link: '#',
        },
        {
            id: 3,
            title: 'Python Data Analysis Tool',
            description: 'A data processing script using Python to clean, transform, and visualize large datasets using popular data science libraries.',
            tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
            link: '#',
        },
    ],
    CERTIFICATIONS: [
        { title: 'Java Essentials', issuer: 'LinkedIn Learning', year: '2025', icon: Code },
        { title: 'React Essentials', issuer: 'LinkedIn Learning', year: '2025', icon: Code },
        { title: 'Technical Literacy', issuer: 'Self-Assessed', year: 'Current', icon: Cpu },
    ],
    QUIZ: {
        Math: [
            { question: "What is 7 times 8?", options: [54, 56, 64, 78], answer: 56 },
            { question: "What is the square root of 81?", options: [8, 9, 7, 10], answer: 9 },
            { question: "If x + 5 = 12, what is x?", options: [6, 7, 8, 9], answer: 7 },
        ],
        CS: [
            { question: "Which data structure uses LIFO?", options: ["Queue", "Array", "Stack", "Tree"], answer: "Stack" },
            { question: "What does 'DOM' stand for?", options: ["Data Object Model", "Document Object Markup", "Document Object Model", "Design Order Module"], answer: "Document Object Model" },
            { question: "Which language runs in the browser?", options: ["Python", "Java", "C++", "JavaScript"], answer: "JavaScript" },
        ],
        Trivia: [
            { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
            { question: "How many planets are in our solar system?", options: [7, 8, 9, 10], answer: 8 },
            { question: "Which element has the symbol 'Fe'?", options: ["Fluorine", "Iron", "Ferrite", "Gold"], answer: "Iron" },
        ],
        CORRECT_MEMES: [
            "Hackerman level achieved! You passed the test.",
            "That's a clean compile! Flawless execution.",
            "Syntax: Correct! Logic: Impeccable!",
            "Access Granted. You know the code."
        ],
        INCORRECT_MEMES: [
            "Fatal Error: Did you forget to git commit that answer?",
            "404 Knowledge Not Found. Time for debugging!",
            "Oops. Recursion failure. Try again from the top!",
            "Segmentation Fault. Memory leak in your brain cache!"
        ]
    }
};

export const Icons = {
    Home,
    User,
    Code,
    Award,
    Gamepad2,
    Mail,
    Rocket,
    Zap
};
