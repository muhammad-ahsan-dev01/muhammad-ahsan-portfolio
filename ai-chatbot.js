const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");


// ===============================
// Send Button
// ===============================

sendBtn.addEventListener("click", sendMessage);


// ===============================
// Enter Key
// ===============================

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// ===============================
// Send Message
// ===============================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // User message
    addMessage(message, "user");

    // Clear input
    userInput.value = "";

    // Bot response
    setTimeout(function () {

        const reply = getBotResponse(message);

        addMessage(reply, "bot");

    }, 500);

}


// ===============================
// Add Message
// ===============================

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);


    if (sender === "bot") {

        messageDiv.innerHTML = `
            <div class="avatar">🤖</div>

            <div class="message-content">
                <p>${message}</p>
            </div>
        `;

    } else {

        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>

            <div class="avatar">👤</div>
        `;

    }


    chatBox.appendChild(messageDiv);

    // Automatically scroll down
    chatBox.scrollTop = chatBox.scrollHeight;

}


// ===============================
// Quick Message
// ===============================

function quickMessage(message) {

    userInput.value = message;

    sendMessage();

}


// ===============================
// Bot Responses
// ===============================

function getBotResponse(message) {

    const text = message.toLowerCase().trim();


    // GREETING
    if (
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 I'm Ahsan AI. How can I help you today?";

    }


    // NAME
    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {

        return "My name is Ahsan AI 🤖. I'm a personal chatbot created for Muhammad Ahsan.";

    }


    // ABOUT AHSAN
    if (
        text.includes("about ahsan") ||
        text.includes("tell me about ahsan")
    ) {

        return "Muhammad Ahsan is a Software Engineering student and aspiring Front-End Developer. He works with HTML, CSS, JavaScript, C and C++.";

    }


    // USER NAME
    if (
        text.includes("my name") ||
        text.includes("who am i")
    ) {

        return "Your name is Muhammad Ahsan. 😊";

    }


    // HTML
    if (text.includes("html")) {

        return "HTML stands for HyperText Markup Language. 🌐 It is used to create the structure of web pages.";

    }


    // CSS
    if (text.includes("css")) {

        return "CSS stands for Cascading Style Sheets. 🎨 It is used to design and style HTML web pages.";

    }


    // JAVASCRIPT
    if (
        text.includes("javascript") ||
        text.includes("java script") ||
        text === "js"
    ) {

        return "JavaScript is a programming language used to make websites interactive and dynamic. ⚡";

    }


    // FRONTEND
    if (
        text.includes("frontend") ||
        text.includes("front end")
    ) {

        return "Front-end development focuses on what users see and interact with, mainly using HTML, CSS and JavaScript. 💻";

    }


    // WEB DEVELOPMENT
    if (
        text.includes("web development") ||
        text.includes("website")
    ) {

        return "Web development is the process of creating websites and web applications using technologies such as HTML, CSS and JavaScript.";

    }


    // PORTFOLIO
    if (text.includes("portfolio")) {

        return "A portfolio website showcases skills, projects, education and contact information. 🚀";

    }


    // PROJECTS
    if (
        text.includes("projects") ||
        text.includes("project")
    ) {

        return "Ahsan's portfolio projects include Calculator, To-Do List, Weather App, Quiz App, E-Commerce Website, Movie App, AI Chatbot, WhatsApp Clone UI and Login & Signup System. 🚀";

    }


    // WEATHER
    if (text.includes("weather")) {

        return "Ahsan has a Weather App that uses the OpenWeather API to display weather information. 🌦️";

    }


    // C++
    if (
        text.includes("c++") ||
        text.includes("cpp")
    ) {

        return "C++ is a powerful programming language used for programming fundamentals, software development, games and system programming. 💻";

    }


    // REACT
    if (text.includes("react")) {

        return "React is a JavaScript library used for building modern and interactive user interfaces. ⚛️";

    }


    // GITHUB
    if (text.includes("github")) {

        return "GitHub is a platform where developers store, manage and share their code using Git. 🐙";

    }


    // HELP
    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {

        return "I can answer questions about HTML, CSS, JavaScript, React, C++, web development, Muhammad Ahsan and his portfolio projects. 🤖";

    }


    // THANKS
    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😊";

    }


    // BYE
    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {

        return "Goodbye! 👋 See you again.";

    }


    // DEFAULT
    return "Interesting question! 🤔 I don't have a specific answer for that yet. Try asking me about HTML, CSS, JavaScript, React, C++, web development, Ahsan or his portfolio.";

}