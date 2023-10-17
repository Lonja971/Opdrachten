let rawAnswers = localStorage.getItem('answers');
let answers = JSON.parse(rawAnswers);
let rawQuestions = localStorage.getItem('questions');
let questions = JSON.parse(rawQuestions);
let rawConditions = localStorage.getItem('conditions');
let conditions = JSON.parse(rawConditions);
let analysisContainer = document.querySelector('.analysis__container');

let rating = 0;

for (let i = 0; i < questions.length; i++) {
   const userAnswer = answers[i];
   const goodAnswer = questions[i];
   const isAnswerCorrect = userAnswer.toLowerCase() === goodAnswer.toLowerCase();

   // Створення HTML для питання
   const questionHTML = `
   <li class="analysis__question">
      <h2 class="analysis__question__text">
         ${conditions[i]}
      </h2>
      <div class="analysis__results">
         <div class="analysis__results-text">
            <div class="analysis__question-antword">Correct antwoord: <span class="analysis-answer" id="goodAnswer${i}">${goodAnswer}</span></div>
            <div class="analysis__question-antword">Uw antwoord: <span id="userAnswer${i}">${userAnswer}</span></div>
         </div>
         <div id="icon${i}" class="analysis__results-icon">
            ${isAnswerCorrect ? '<img src="img/good.jpg" alt="">' : '<img src="img/bad.jpg" alt="">'}
         </div>
      </div>
   </li>
   `;

   analysisContainer.innerHTML += questionHTML;

   if (isAnswerCorrect) {
     rating++;
   }
}

analysisContainer.innerHTML += `
<h2 class="analysis__rating">
   Aantal juiste antwoorden: `+rating+`/`+questions.length+`
</h2>
`;
