import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import { DATA } from '../data';
import SectionContainer from './SectionContainer';

const Playground = () => {
    const [subject, setSubject] = useState('Math');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizState, setQuizState] = useState('playing'); // 'playing', 'answered', 'finished'
    const [selectedOption, setSelectedOption] = useState(null);
    const [memeText, setMemeText] = useState('');

    const currentQuiz = DATA.QUIZ[subject];
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === currentQuiz.length - 1;

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
        resetQuiz();
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizState('playing');
        setSelectedOption(null);
        setMemeText('');
    };

    const handleAnswer = (option) => {
        if (quizState !== 'playing') return;

        setSelectedOption(option);
        setQuizState('answered');

        const isCorrect = option === currentQuestion.answer;

        const memeArray = isCorrect ? DATA.QUIZ.CORRECT_MEMES : DATA.QUIZ.INCORRECT_MEMES;
        const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
        setMemeText(randomMeme);

        if (isCorrect) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (isLastQuestion) {
            setQuizState('finished');
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setQuizState('playing');
            setSelectedOption(null);
            setMemeText('');
        }
    };

    const getOptionClass = (option) => {
        const isSelected = selectedOption === option;
        const isAnswered = quizState === 'answered';
        const isCorrect = option === currentQuestion.answer;

        let classes = "w-full text-left p-4 rounded-lg transition duration-300 border font-medium font-inter";

        if (!isAnswered) {
            classes += " bg-zinc-800/70 border-neon-aqua/20 hover:bg-zinc-700/70 hover:border-neon-aqua";
        } else {
            if (isCorrect) {
                classes += " bg-green-900/50 border-green-500 text-green-300 shadow-neon-sm shadow-green-500/30";
            } else if (isSelected) {
                classes += " bg-red-900/50 border-red-500 text-red-300 shadow-neon-sm shadow-red-500/30";
            } else {
                classes += " bg-zinc-800/70 border-zinc-700 text-gray-400 opacity-60";
            }
        }
        return classes;
    };


    return (
        <SectionContainer id="playground" title="The Dev Playground" icon={Gamepad2}>
            <p className="text-gray-300 mb-10 text-xl text-center font-inter">
                Test your knowledge with a quick quiz and get rewarded with a random developer meme (text-based) after each answer!
            </p>

            <div className="bg-zinc-900/70 p-8 rounded-xl shadow-lg shadow-purple-500/10 border border-neon-purple/20 w-full max-w-2xl mx-auto">

                {/* Subject Dropdown */}
                <div className="mb-8 flex justify-between items-center border-b border-purple-500/30 pb-4">
                    <label htmlFor="subject-select" className="text-lg font-semibold text-neon-aqua mr-4 font-orbitron">
                        Select Module:
                    </label>
                    <select
                        id="subject-select"
                        value={subject}
                        onChange={handleSubjectChange}
                        className="p-2 bg-zinc-800 border border-neon-aqua/50 rounded-lg text-neon-purple focus:ring-neon-purple focus:border-neon-purple transition cursor-pointer font-orbitron"
                    >
                        {Object.keys(DATA.QUIZ).filter(key => key !== 'CORRECT_MEMES' && key !== 'INCORRECT_MEMES').map(sub => (
                            <option key={sub} value={sub}>{sub}</option>
                        ))}
                    </select>
                </div>

                {/* Quiz Content */}
                {quizState !== 'finished' ? (
                    <div>
                        <div className="mb-6 text-xl text-white p-4 bg-zinc-800/70 rounded-lg shadow-inner border border-neon-purple/30 font-inter">
                            <span className="font-bold text-neon-aqua mr-2 font-orbitron">Q{currentQuestionIndex + 1}/{currentQuiz.length}:</span>
                            {currentQuestion.question}
                        </div>

                        <div className="space-y-4">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    disabled={quizState === 'answered'}
                                    className={getOptionClass(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        {quizState === 'answered' && (
                            <div className="mt-6 p-4 bg-zinc-800/70 border-l-4 border-neon-purple rounded-r-lg shadow-md font-inter">
                                <p className="text-lg font-bold text-neon-aqua mb-2 font-orbitron">Meme Output:</p>
                                <p className="text-white italic">"{memeText}"</p>
                                <button
                                    onClick={handleNext}
                                    className="mt-4 px-6 py-2 text-black bg-neon-purple rounded-lg font-bold hover:bg-purple-400 transition shadow-neon-sm shadow-purple-500/50 font-orbitron"
                                >
                                    {isLastQuestion ? 'View Results' : 'Next Question'}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Quiz Results */
                    <div className="text-center p-8 bg-zinc-800/70 rounded-xl border border-neon-aqua/30">
                        <h3 className="text-3xl font-bold text-neon-purple mb-4 font-orbitron">System Reboot Complete!</h3>
                        <p className="text-2xl text-white mb-6 font-orbitron">
                            Final Score: <span className="font-extrabold text-neon-aqua">{score} / {currentQuiz.length}</span>
                        </p>
                        <p className="text-gray-300 mb-6 font-inter">Time to deploy some real code or try a new module!</p>
                        <button
                            onClick={resetQuiz}
                            className="px-6 py-3 text-lg font-bold text-black bg-neon-aqua rounded-lg hover:bg-aqua-400 transition shadow-neon-sm shadow-aqua-500/50 font-orbitron"
                        >
                            Run Diagnostics Again
                        </button>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
};

export default Playground;
