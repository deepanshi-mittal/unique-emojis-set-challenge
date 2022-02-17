document.getElementById("btn").addEventListener("click", filterDuplicates)

const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

function filterDuplicates() {
    uniqueEmojisP.textContent = '';
    // 1. Filter out all duplicate emojis, leaving only one of each emoji.
    const result = new Set(emojis)
    // 2. Render the unique emojis in uniqueEmojisP.
    for(let emoji of result) {
        uniqueEmojisP.textContent += emoji
    }
    // Just for fun: Replace them with your favourite emojis! 😃 
}
