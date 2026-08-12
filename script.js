const aboutText = document.getElementById("aboutText");

const aboutLines = [
    "Hi, I'm Muhammad Ahsan",
    "I am a Software Engineering student.",
    "I am an aspiring Front-End Developer.",
    "I build responsive and modern websites.",
    "I am learning HTML, CSS and JavaScript.",
    "I love creating web development projects."
];

let aboutIndex = 0;

if (aboutText) {

    setInterval(function () {

        aboutText.style.opacity = "0";

        setTimeout(function () {

            aboutIndex++;

            if (aboutIndex >= aboutLines.length) {
                aboutIndex = 0;
            }

            aboutText.textContent = aboutLines[aboutIndex];

            aboutText.style.opacity = "1";

        }, 400);

    }, 2500);

}