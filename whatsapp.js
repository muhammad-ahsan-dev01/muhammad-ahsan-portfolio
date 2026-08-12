const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatArea = document.getElementById("chatArea");


function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }


    // Create user message

    const messageBox = document.createElement("div");

    messageBox.classList.add("message", "sent");


    const text = document.createElement("span");

    text.textContent = message;


    const time = document.createElement("small");

    const now = new Date();

    time.textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }) + " ✓✓";


    messageBox.appendChild(text);
    messageBox.appendChild(time);


    chatArea.appendChild(messageBox);


    // Clear input

    messageInput.value = "";


    // Scroll to bottom

    chatArea.scrollTop = chatArea.scrollHeight;


    // Automatic reply

    setTimeout(() => {

        const replyBox = document.createElement("div");

        replyBox.classList.add("message", "received");


        const replyText = document.createElement("span");

        replyText.textContent = "Okay! 👍";


        const replyTime = document.createElement("small");

        const replyNow = new Date();

        replyTime.textContent =
            replyNow.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });


        replyBox.appendChild(replyText);
        replyBox.appendChild(replyTime);


        chatArea.appendChild(replyBox);


        chatArea.scrollTop = chatArea.scrollHeight;

    }, 700);
}


/* Send button */

sendBtn.addEventListener("click", sendMessage);


/* Enter key */

messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});