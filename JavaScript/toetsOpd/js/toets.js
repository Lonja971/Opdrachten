form = document.getElementById('form');

form.addEventListener('submit', function (e) {
   e.preventDefault();
   var questions = [];
   for (var i = 1; i <= 3; i++) {
     var question = document.getElementsByName('question' + i)[0].value;
     questions.push(question);
   }
   answers = [
      'Madrid',
      'Middellandse zee',
      '15',
   ];
   conditions = [
      'Wat is de hoofdstad van Spanje?',
      'In welke zee ligt het eiland Mallorca?',
      'Hoeveel paar poten heeft een duizendpoot?',
   ];
   localStorage.setItem('questions', JSON.stringify(questions));
   localStorage.setItem('answers', JSON.stringify(answers));
   localStorage.setItem('conditions', JSON.stringify(conditions));

   window.location.href = "result.html";
});