// ===============================
// Hero Text Animation
// ===============================

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


// ===============================
// Contact Form - Formspree
// ===============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const sendBtn = document.getElementById("sendBtn");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formMessage.textContent =
                    "✅ Message sent successfully! I'll get back to you soon.";

                formMessage.style.color = "green";

                contactForm.reset();

            } else {

                formMessage.textContent =
                    "❌ Something went wrong. Please try again.";

                formMessage.style.color = "red";
            }

        } catch (error) {

            formMessage.textContent =
                "❌ Network error. Please try again.";

            formMessage.style.color = "red";
        }

        sendBtn.disabled = false;
        sendBtn.textContent = "Send Message";

    });

}
