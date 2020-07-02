import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quiz-calculus',
  templateUrl: './quiz-calculus.component.html',
  styleUrls: ['./quiz-calculus.component.scss']
})
export class QuizCalculusComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    let shuffledQuestions, currentQuestionIndex;

    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      setNextQuestion();
    });

    function startGame() {
      startButton.classList.add('hide');
      shuffledQuestions = questions.sort(() => Math.random() - .5);
      currentQuestionIndex = 0;
      questionContainerElement.classList.remove('hide');
      setNextQuestion();
    }

    function setNextQuestion() {
      resetState();
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
      questionElement.innerText = question.question;
      question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
      });
    }

    function resetState() {
      clearStatusClass(document.getElementById('wrapper'));
      nextButton.classList.add('hide');
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
      }
    }

    function selectAnswer(e) {
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;
      setStatusClass(document.getElementById('wrapper'), correct);
      Array.from(answerButtonsElement.children).forEach((button: HTMLButtonElement) => {
        setStatusClass(button, button.dataset.correct);
      });
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
      } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
      }
    }

    function setStatusClass(element, correct) {
      clearStatusClass(element);
      if (correct) {
        element.classList.add('correct');
      } else {
        element.classList.add('wrong');
      }
    }

    function clearStatusClass(element) {
      element.classList.remove('correct');
      element.classList.remove('wrong');
    }

    const questions = [
      {
        question: 'Which among the following mammal flies?',
        answers: [
          {
            text: 'Black panther',
            correct: false
          },
          {
            text: 'Ostrich',
            correct: false
          },
          {
            text: 'Leopard',
            correct: false
          },
          {
            text: 'Bat',
            correct: true
          }
        ]
      },
      {
        question: 'Which part of the human brain is the regulating center for swallowing and vomiting?',
        answers: [
          {
            text: 'Cerebellum',
            correct: false
          },
          {
            text: 'Cerebrum',
            correct: false
          },
          {
            text: 'Medulla oblongata',
            correct: true
          },
          {
            text: 'Pons',
            correct: false
          }
        ]
      },
      {
        question: 'Helicobacter pylori infection causes \u2026\u2026',
        answers: [
          {
            text: 'Lung cancer',
            correct: false
          },
          {
            text: 'Brain tumor',
            correct: false
          },
          {
            text: 'Breast cancer',
            correct: false
          },
          {
            text: 'Stomach cancer',
            correct: true
          }
        ]
      },
      {
        question: 'Which one of the following is the disease, which vaccine is yet to discover?',
        answers: [
          {
            text: 'Tetanus',
            correct: false
          },
          {
            text: 'Malaria',
            correct: true
          },
          {
            text: 'Measles',
            correct: false
          },
          {
            text: 'Mumps',
            correct: false
          }
        ]
      },
      {
        question: 'The biological process used in preparing the wine from grains is similar to the preparation of \u2026',
        answers: [
          {
            text: 'Curd from the milk',
            correct: true
          },
          {
            text: 'Cream from the milk',
            correct: false
          },
          {
            text: 'Quinine from the cinchona',
            correct: false
          },
          {
            text: 'Penicillin from the penicillium',
            correct: false
          }
        ]
      },
      {
        question: 'In reference to cell, find the incorrect statement:',
        answers: [
          {
            text: 'Shape and size of cells are interrelated to specific function',
            correct: false
          },
          {
            text: 'Some cells can change their shapes',
            correct: false
          },
          {
            text: 'Each cell has its own ability to perform',
            correct: false
          },
          {
            text: 'Same type of cells are present in all body tissues',
            correct: true
          }
        ]
      },
      {
        question: 'Consider the following statements:',
        answers: [
          {
            text: 'Only 1',
            correct: false
          },
          {
            text: 'Only 2',
            correct: true
          },
          {
            text: 'Both',
            correct: false
          },
          {
            text: 'Neither 1 nor 2',
            correct: false
          }
        ]
      },
      {
        question: 'The place where gas exchange occurs is known as \u2026',
        answers: [
          {
            text: 'Lung',
            correct: true
          },
          {
            text: 'Nasal cavities',
            correct: false
          },
          {
            text: 'Pharynx',
            correct: false
          },
          {
            text: 'Larynx',
            correct: false
          }
        ]
      },
      {
        question: 'Consider the following statements:',
        answers: [
          {
            text: 'Only 1',
            correct: false
          },
          {
            text: 'Only 2',
            correct: false
          },
          {
            text: 'Both',
            correct: true
          },
          {
            text: 'Neither 1 nor 2',
            correct: false
          }
        ]
      },
      {
        question: 'The function of Occuli Orbicularis is \u2026\u2026',
        answers: [
          {
            text: 'Raises the eyebrows',
            correct: false
          },
          {
            text: 'Closes the eyelids',
            correct: true
          },
          {
            text: 'Closes the lips',
            correct: false
          },
          {
            text: 'Raises, rotates, or draws back the shoulders',
            correct: false
          }
        ]
      },
      {
        question: 'The deficiency of \u2026\u2026\u2026\u2026\u2026 causes osteomalacia.',
        answers: [
          {
            text: 'Vitamin C',
            correct: false
          },
          {
            text: 'Vitamin D',
            correct: true
          },
          {
            text: 'Vitamin E',
            correct: false
          },
          {
            text: 'Vitamin K',
            correct: false
          }
        ]
      },
      {
        question: 'Amnesia is \u2026',
        answers: [
          {
            text: 'Loss of sight',
            correct: false
          },
          {
            text: 'Loss of memory',
            correct: true
          },
          {
            text: 'Loss of hair',
            correct: false
          },
          {
            text: 'Loss of listening capacity',
            correct: false
          }
        ]
      },
      {
        question: 'Which among the following is the largest living mammal?',
        answers: [
          {
            text: 'Whale',
            correct: true
          },
          {
            text: 'Elephant',
            correct: false
          },
          {
            text: 'Giraffe',
            correct: false
          },
          {
            text: 'Mammoth',
            correct: false
          }
        ]
      },
      {
        question: 'Which among the following is the center of first brain bank in India?',
        answers: [
          {
            text: 'Delhi',
            correct: false
          },
          {
            text: 'Bengaluru',
            correct: true
          },
          {
            text: 'Chennai',
            correct: false
          },
          {
            text: 'Mumbai',
            correct: false
          }
        ]
      },
      {
        question: 'In respect to brain consider the following statements:',
        answers: [
          {
            text: 'Only 1',
            correct: false
          },
          {
            text: 'Only 2',
            correct: false
          },
          {
            text: 'Both',
            correct: true
          },
          {
            text: 'Neither 1 nor 2',
            correct: false
          }
        ]
      },
      {
        question: 'Which among the following correctly defines the lotic ecosystem?',
        answers: [
          {
            text: 'The ecosystem that is located in a desert region',
            correct: false
          },
          {
            text: 'The ecosystem that is located in a mountain region',
            correct: false
          },
          {
            text: 'The ecosystem that is located in a flowing river',
            correct: true
          },
          {
            text: 'the ecosystem that is located in a pond.',
            correct: false
          }
        ]
      },
      {
        question: 'Which among the following makes food poisonous?',
        answers: [
          {
            text: 'Clostridium Botulinum',
            correct: true
          },
          {
            text: 'Acidobacteria',
            correct: false
          },
          {
            text: 'Chloroflexi',
            correct: false
          },
          {
            text: 'Chrysiogenetes',
            correct: false
          }
        ]
      },
      {
        question: 'Consider the following statements:',
        answers: [
          {
            text: 'Only 1',
            correct: false
          },
          {
            text: 'Only 2',
            correct: false
          },
          {
            text: 'Both',
            correct: true
          },
          {
            text: 'Neither 1 nor 2',
            correct: false
          }
        ]
      },
      {
        question: 'Which among the following structures of plant is responsible for transpiration?',
        answers: [
          {
            text: 'Xylem',
            correct: false
          },
          {
            text: 'Root',
            correct: false
          },
          {
            text: 'Stomata',
            correct: true
          },
          {
            text: 'Bark',
            correct: false
          }
        ]
      },
      {
        question: 'The deficiency of \u2026\u2026\u2026\u2026\u2026 causes anemia.',
        answers: [
          {
            text: 'Vitamin B5',
            correct: false
          },
          {
            text: 'Vitamin B6',
            correct: true
          },
          {
            text: 'Vitamin B7',
            correct: false
          },
          {
            text: 'Vitamin B9',
            correct: false
          }
        ]
      }
    ];
  }

  ngOnInit(): void {

  }
}
