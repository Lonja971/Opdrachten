let body = document.body;
let mainMoreButton = document.getElementById('mainMoreButton');
mainMoreButton.addEventListener("click", function(){
   mainMoreButton.classList.add('moreOpen');
   body.addEventListener('click', function(e) {
      if(!mainMoreButton.contains(e.target)){
         mainMoreButton.classList.remove('moreOpen');
      }
  });
});