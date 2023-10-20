plug = document.querySelector('.plug');
attemptsBlock = document.getElementById('attempts');

document.addEventListener('DOMContentLoaded', function () {
   const photos = [
     'img/1_card.jpg',
     'img/2_card.jpg',
     'img/3_card.jpg',
     'img/4_card.jpg',
     'img/5_card.jpg',
     'img/6_card.jpg',
     'img/7_card.jpg',
     'img/8_card.jpg',
   ];
 
   const photoPairs = [...photos, ...photos];
 
   function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
     }
   }
 
   shuffleArray(photoPairs);
 
   const memoryHelpBlocks = document.querySelectorAll('.memory__help');
 
   memoryHelpBlocks.forEach((block, index) => {
     const img = document.createElement('img');
     img.src = photoPairs[index];
     block.appendChild(img);
     
     const blockId = block.id;
     const photoPair = photoPairs[index];
     
     block.setAttribute('onclick', `checkClickedCard('${photoPair}', '${blockId}')`);
   });
 });

 var user1Click = [0, null];
 var user2Click = [0, null];
 var attempts = 0;
 
 function checkClickedCard(cardNum, cardId) {
  const audioOpen = new Audio("audio/open.mp3");
  const audioClose = new Audio("audio/close.mp3");
  attempts++;
  
  if (user1Click[0] === 0) {
    user1Click[0] = cardNum;
    user1Click[1] = cardId;
    document.getElementById(user1Click[1]).classList.add('open');
    audioOpen.play();
  } else {
    user2Click[0] = cardNum;
    user2Click[1] = cardId;
    document.getElementById(user2Click[1]).classList.add('open');
    audioOpen.play();

    if (user1Click[0] === user2Click[0]) {
      document.getElementById(user1Click[1]).classList.add('matched');
      document.getElementById(user2Click[1]).classList.add('matched');
      user1Click = [0, null];
      user2Click = [0, null];
    } else {
      plug.style.display = "block";
      setTimeout(function () {
        document.getElementById(user1Click[1]).classList.remove('open');
        document.getElementById(user2Click[1]).classList.remove('open');
        audioClose.play();
        user1Click = [0, null];
        user2Click = [0, null];
        plug.style.display = "none";
      }, 1000);
    }
  }
  const allBlocks = document.querySelectorAll('.memory__help');
  const allMatched = Array.from(allBlocks).every(block => block.classList.contains('matched'));

  if (allMatched) {
    attemptsBlock.innerHTML = attempts;
    document.querySelector('.win-window').classList.add('win-active');
  }
}
