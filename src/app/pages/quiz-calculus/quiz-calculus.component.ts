import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quiz-calculus',
  templateUrl: './quiz-calculus.component.html',
  styleUrls: ['./quiz-calculus.component.scss']
})
export class QuizCalculusComponent implements OnInit, AfterViewInit {

  questions = [
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
      question: 'crack',
      answers: [
        { text: 'hack', correct: true },
        { text: 'smack', correct: false },
        { text: 'black', correct: false },
        { text: 'tack', correct: false }
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
  ];

  @ViewChild('startButton') startButton: ElementRef;
  nextButton: HTMLElement;
  questionContainerElement: HTMLElement;
  questionElement: HTMLElement;
  answerButtonsElement: HTMLElement;

  shuffledQuestions: string | any[];
  currentQuestionIndex: number;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.nextButton = document.getElementById('next-btn')
    this.questionContainerElement = document.getElementById('question-container')
    this.questionElement = document.getElementById('question')
    this.answerButtonsElement = document.getElementById('answer-buttons')

    //this.startButton.nativeElement.addEventListener('click', this.startGame)
    this.nextButton.addEventListener('click', () => {
      this.currentQuestionIndex++
      this.setNextQuestion()
    })
  }

  startGame() {
    this.startButton.nativeElement.classList.add('hide')
    this.shuffledQuestions = this.questions.sort(() => Math.random() - .5)
    this.currentQuestionIndex = 0
    this.questionContainerElement.classList.remove('hide')
    this.setNextQuestion()
  }

  setNextQuestion() {
    this.resetState()
    this.showQuestion(this.shuffledQuestions[this.currentQuestionIndex])
  }

  showQuestion(question: { question: string; answers: any[]; }) {
    this.questionElement.innerText = question.question
    question.answers.forEach((answer: { text: string; correct: any; }) => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', this.selectAnswer)
      this.answerButtonsElement.appendChild(button)
    })
  }

  resetState() {
    this.clearStatusClass(document.body)
    this.nextButton.classList.add('hide')
    while (this.answerButtonsElement.firstChild) {
      this.answerButtonsElement.removeChild(this.answerButtonsElement.firstChild)
    }
  }

  selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    this.setStatusClass(document.body, correct)
    Array.from(this.answerButtonsElement.children).forEach((button: HTMLButtonElement) => {
      this.setStatusClass(button, button.dataset.correct)
    })
    if (this.shuffledQuestions.length > this.currentQuestionIndex + 1) {
      this.nextButton.classList.remove('hide')
    } else {
      this.startButton.nativeElement.innerText = 'Restart'
      this.startButton.nativeElement.classList.remove('hide')
    }
  }

  setStatusClass(element: HTMLElement, correct: any) {
    this.clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  clearStatusClass(element: HTMLElement) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
}
