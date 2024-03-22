import project00 from "../assets/quizG.jpg";
import project01 from "../assets/littleLemon.jpg";
import project02 from "../assets/pswGn.jpg"

const projects = [
    {
        title: 'Restaurant website',
        img : project01,
        visitLink: 'https://anastasi11a.github.io/simplewebsite/',
        gitHubLink: 'https://github.com/Anastasi11a/layoutsite',
        skills: 'HTML, CSS',
        description: 'A website designed for a restaurant offers users a simple layout to navigate without relying on JavaScript functionality.',
        features: 'Animated demonstration of promotions, displays new menu items with descriptions, convenient online table booking, the Footer contains contact information.',
    },
    {
        title: 'Quiz Creator',
        img : project00,
        visitLink: 'https://anastasi11a.github.io/quizcreator/',
        gitHubLink: 'https://github.com/Anastasi11a/quizcreator',
        skills: 'JavaScript, React, Bootstrap v5',
        description: 'This is an app for creating and taking quizzes. It allows users to create quiz, take them, and get feedback on their answers.',
        features: 'An easy way to create a quiz with questions and options, availability to download quizzes as JSON files, dynamic Feedback.',
    },
    {
        title: 'Password Generator',
        img : project02,
        visitLink: "https://anastasi11a.github.io/passwordgenerator/",
        gitHubLink: 'https://github.com/Anastasi11a/passwordgenerator',
        skills: 'TypeScript, React, ChakraUi',
        description: 'A password generator app that allows users to customize password length and complexity.',
        features: 'Adjustable password length, complexity settings, dynamic password generation.',
    },
    // {
    //     title: '',
    //     skills: '',
    //     img : project,
    //     visitLink: '',
    //     gitHubLink: 'https://github.com/Anastasi11a/'
    // },
];

export default projects;