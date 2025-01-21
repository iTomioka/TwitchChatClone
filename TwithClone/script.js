const chatMessages = document.getElementById('chat-messages');
const colorPicker = document.getElementById('color-picker');
const usernameInput = document.getElementById('username-input');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function addMessage(username, message, color) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="username" style="color: ${color}">${username}:</span> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const username = usernameInput.value.trim() || 'Anonymous';
    const message = messageInput.value.trim();
    const color = colorPicker.value;
    
    if (message) {
        addMessage(username, message, color);
        messageInput.value = '';
    }
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

const examplePrompts = [
    "What's your favorite game to stream?",
    "How did you get started with streaming?",
    "What's the funniest moment you've had while streaming?",
    "If you could collab with any streamer, who would it be?",
    "What's your go-to snack during long streaming sessions?"
];

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

examplePrompts.forEach(prompt => {
    setTimeout(() => {
        addMessage('Viewer', prompt, randomColor());
    }, Math.random() * 5000);
});
