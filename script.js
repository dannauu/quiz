const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is my favorite color?',
    answers: [
      { text: 'Red', correct: true },
      { text: 'Black', correct: false },
      { text: 'Purple', correct: false },
      { text: 'Blue', correct: false }
    ]
  },
  {
    question: 'What do I collect?',
    answers: [
      { text: 'Flashlights', correct: true },
      { text: 'Knives', correct: false },
      { text: 'Rocks', correct: false },
      { text: 'Tools', correct: false }
    ]
  },
  {
    question: 'What would I order at Zarda BBQ?',
    answers: [
      { text: 'Ribs', correct: false },
      { text: 'Ham Sandwich', correct: true },
      { text: 'Pulled Pork', correct: false },
      { text: 'Smoked Sausage', correct: false }
    ]
  },
  {
    question: 'What kind of vehicle do I drive?',
    answers: [
        { text: 'Honda Civic', correct: false },
        { text: 'F150', correct: true },
        { text: 'Dodge Ram', correct: false },
        { text: 'Nissan Altima', correct: false }
    ]
  },
  {
    question: 'What kind of fish do I prefer to fish for?',
    answers: [
        { text: 'Bass', correct: false },
        { text: 'Trout', correct: true },
        { text: 'Crappie', correct: false },
        { text: 'Catfish', correct: false }
    ]
  },
  {
    question: 'What color is my wedding ring?',
    answers: [
        { text: 'Black', correct: true },
        { text: 'Silver', correct: false },
        { text: 'Gold', correct: false },
        { text: 'Rose Gold', correct: false }
    ]
  },
  {
    question: 'How long is my longest drive in disc golf?',
    answers: [
        { text: '342ft', correct: false },
        { text: '513ft', correct: true },
        { text: '603ft', correct: false },
        { text: '242ft', correct: false }
    ]
  },
  {
    question: 'What is my favorite thing to do in my free time?',
    answers: [
        { text: 'Sewing', correct: false },
        { text: 'Video Games', correct: true },
        { text: 'Coding', correct: false },
        { text: 'Disc Golf', correct: false }
    ]
  },
  {
    question: 'What is my middle name?',
    answers: [
        { text: 'Jacob', correct: false },
        { text: 'Aaron', correct: true },
        { text: 'Billy', correct: false },
        { text: 'Samson', correct: false }
    ]
  },
  {
    question: 'What do I put on my cheeseburger?',
    answers: [
        { text: 'Cheese only', correct: false },
        { text: 'Lettuce, Mustard, Mayo, Onion, Cheese', correct: true },
        { text: 'Tomato, Ketchup, Lettuce, Mustard, Mayo, Onion', correct: false },
        { text: 'Mustard, Mayo, Onion', correct: false }
    ]
  }
]