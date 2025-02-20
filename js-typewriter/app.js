const displayText = document.getElementById('text')
let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false

const phrases = [
    'Hello, my name is Rachel.', 
    'I love JavaScript.',
    'This should look really fun.'
]

function phrasesLoop() {
    isEnd = false
    displayText.innerHTML = phrases[0]
    console.log('print')

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
        j++
        displayText.innerHTML = currentPhrase.join('')
    } 

    if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop()
        j--
        displayText.innerHTML = currentPhrase.join('')
    }

    if (j === phrases[i].length) {
       isEnd = true
       isDeleting = true
    }

    if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
            i = 0
        }
    }
}
    const speedUp = Math.random() * 80
    const normalSpeed = Math.random() * 300
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed //2000 ms / 2 seconds
    setTimeout(phrasesLoop, time)

}

phrasesLoop();