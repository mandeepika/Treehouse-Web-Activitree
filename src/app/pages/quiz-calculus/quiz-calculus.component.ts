import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quiz-calculus',
  templateUrl: './quiz-calculus.component.html',
  styleUrls: ['./quiz-calculus.component.scss']
})
export class QuizCalculusComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
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
      clearStatusClass(document.getElementById("wrapper"))
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
    }

    function selectAnswer(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.getElementById("wrapper"), correct)
      Array.from(answerButtonsElement.children).forEach((button: HTMLButtonElement) => {
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
        question: 'Did you know diabetes develops due to a problem with the pancreas?',
        answers: [
          { text: 'Yes', correct: true },
          { text: 'Ooh', correct: true },
          { text: 'Ahh', correct: true },
          { text: 'No', correct: true }
        ]
      },
      {
        question: 'What is the hottest planet in the solar system?',
        answers: [
          { text: 'Mars', correct: false },
          { text: 'Saturn', correct: false },
          { text: 'Venus', correct: true },
          { text: 'Mercury', correct: false }
        ]
      },
      {
        question: 'What rhymes with crack?',
        answers: [
          { text: 'hack', correct: true },
          { text: 'soap', correct: false },
          { text: 'blue', correct: false },
          { text: 'tick', correct: false }
        ]
      },
      {
        question: 'Sound travels faster in air than in water.',
        answers: [
          { text: 'Hmmmm', correct: false },
          { text: 'False', correct: true },
          { text: 'True', correct: false },
          { text: 'Really?', correct: false }
        ]
      },
      {
        question: 'How long does a human red blood cell survive?',
        answers: [
          { text: '120 seconds', correct: false },
          { text: '60 days', correct: false },
          { text: '60 minutes', correct: false },
          { text: '120 days', correct: true }
        ]
      },
      {
        question: 'How many hearts does an octopus have?',
        answers: [
          { text: '2', correct: false },
          { text: '8', correct: false },
          { text: '3', correct: true },
          { text: '5', correct: false }
        ]
      },
      {
        question: 'What is 2 + 2?',
        answers: [
          { text: '4', correct: true },
          { text: '2', correct: false },
          { text: '22', correct: false },
          { text: '<3', correct: false }
        ]
      },
      {
        question: 'All palindromes with an even number of digits are divisible by:',
        answers: [
          { text: '5', correct: false },
          { text: '17', correct: false },
          { text: '3', correct: false },
          { text: '11', correct: true }
        ]
      },
      {
        question: 'It is _________ my dudes.',
        answers: [
          { text: 'Sunday', correct: false },
          { text: 'Wednesday', correct: true },
          { text: 'Tuesday', correct: false },
          { text: 'Friday', correct: false }
        ]
      },
      {
        question: 'Cows go:',
        answers: [
          { text: 'woo', correct: false },
          { text: 'ooo', correct: false },
          { text: 'moo', correct: true },
          { text: 'coo', correct: false }
        ]
      }
    ]
  }

  ngOnInit(): void {

  }
}
