<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width,initial-scale=1.0,
		maximum-scale=1.0, user-scalable=0">
   <title>Pizza di mama</title>
</head>
<body>
   <wrapper class="wrapper">
      <header class="header">
         <div class="header__container _container">
            <img src="img/logo.png" class="header__logo">
            <ul class="header__list">
               <li class="header__list-item">Pizza</li>
               <li class="header__list-item">Pizza</li>
               <li class="header__list-item">Pizza</li>
            </ul>
         </div>
      </header>
      <div class="main">
         <div class="main__box">
         <div class="main__container _container">
            <div class="main__text">
               <h1 class="main__maintext">
                  Pizza di mama
               </h1>
               <h2 class="main__secondtext">
                  Zoals uit de oven van moeder
               </h2>
            </div>
         </div>
         </div>
      </div>
      <div class="types">
         <div class="types__container _container">
            <div class="types__block">
               <div class="types__text">
                  <h2 class="types__maintext">Pizza's en hun prijzen:</h2>
               </div>
               <div class="types__box">
                  <p class="types__box-name">Soort</p>
                  <p class="types__box-price">Prijs per stuk</p>
                  <p class="types__box-name">Pizza Margherita<img src="img/margaretta.png" class="types__box-img"></p>
                  <p class="types__box-price">12,50 €</p>
                  <p class="types__box-name">Pizza Funghi<img src="img/Funghi.png" class="types__box-img"></p>
                  <p class="types__box-price">12,50 €</p>
                  <p class="types__box-name">Pizza Marina<img src="img/Marina.png" class="types__box-img"></p>
                  <p class="types__box-price">13,95 €</p>
                  <p class="types__box-name">Pizza Hawai<img src="img/Hawai.png" class="types__box-img"></p>
                  <p class="types__box-price">11,50 €</p>
                  <p class="types__box-name">Pizza Quattro Formaggi<img src="img/Quattro_Formaggi.png" class="types__box-img"></p>
                  <p class="types__box-price">14,50 €</p>
               </div>
            </div>
            <div class="korting">
               <p>*Op maandag kosten alle pizza's 7,50 euro!</p>
               <p>*Vrijdag ontvang je 15% korting bij bestellingen boven de 20 euro!</p>
            </div>
         </div>
      </div>
      <div class="formulieren">
         <div class="form__container _container">
            <h2 class="form__maintext">Invullen voor bezorging.</h2>
            <form method="post" action="" class="form">
               <div class="pizzas_block">
                  <p>Pizza:</p>
                  <p>Aantal:</p>
                  <select class="form__item" name="pizza0">
                     <option value="none">Maak uw keuze</option>
                     <option value="Margherita">Margherita</option>
                     <option value="Funghi">Funghi</option>
                     <option value="Marina">Marina</option>
                     <option value="Hawai">Hawai</option>
                     <option value="Quattro_Formaggi">Quattro Formaggi</option>
                  </select>
                  <input type="number" class="form__item" name="nummer0" placeholder="Aantal pizza's" required>
               </div>
               <div class="button__block">
                  <button id="morePizzaButton" class="pizzas__block-button button">Een andere pizza</button>
               </div>
               <input type="text" class="form__item" name="naam" placeholder="Naam" required>
               <input type="text" class="form__item" name="adres" placeholder="Adres" required>
               <input type="text" class="form__item" name="postcode" placeholder="Postcode" required>
               <input type="text" class="form__item" name="plaats" placeholder="Plaats" required>
               <div class="form__radio">
                  <p class="form__item-radio"><input type="radio" name="bezorgen" value="bezorgen">Bezorgen</p>
                  <p class="form__item-radio"><input type="radio" name="bezorgen" value="afhalen">Afhalen</p>
               </div>
               <div class="button__block">
                  <button type="submit" name="submit" class="button">Versturen</button>
               </div>
            </form>
         </div>
      </div>
      <?php
      if(isset($_POST["submit"])){

         //----------------Wij hebben de datum vastgelegd-----------------

         $datum = new DateTime("now");
         //$datum->modify('next Friday');
         $day = $datum->format('D');
         $sell = "";

         //----------------We halen gegevens uit het formulier-----------------

         $naam = $_POST["naam"];
         $adres = $_POST["adres"];
         $postcode = $_POST["postcode"];
         $plaats = $_POST["plaats"];
         $bezorgen = $_POST["bezorgen"];

         $price = 0;

         $i = 0;
         while(isset($_POST['pizza'.$i]) && isset($_POST['nummer'.$i])) {
             ${'pizza'.$i} = $_POST['pizza'.$i];
             ${'nummer'.$i} = $_POST['nummer'.$i];
             ${'pricePizza'.$i} = 0;
         
             if ($day == "Mon") {
               ${'pricePizza'.$i} = 7.50;
               $check = true;
             } elseif (${'pizza'.$i} == 'Margherita' or ${'pizza'.$i} == 'Funghi') {
               ${'pricePizza'.$i} = 12.50;
               $check = true;
             } elseif (${'pizza'.$i} == 'Marina') {
               ${'pricePizza'.$i} = 13.95;
               $check = true;
             } elseif (${'pizza'.$i} == 'Hawai') {
               ${'pricePizza'.$i} = 11.50;
               $check = true;
             } elseif (${'pizza'.$i} == 'Quattro_Formaggi') {
               ${'pricePizza'.$i} = 14.50;
               $check = true;
             } else {
               $check = false;
             }
             ${'pricePizza'.$i} *= ${'nummer'.$i};
         
             $price += ${'pricePizza'.$i};
         
             $i++;
         }
         
         if ($check == true){
            if ($bezorgen == 'bezorgen'){
               $price += 5;
            }   
   
            if ($price >= 20 && $day == "Fri") {
               $fullPrice = $price;
               $fullPrice = round($price, 2);
               $fullPrice = ceil($price / 0.05) * 0.05;
               $fullPrice = number_format($price, 2);
               $price = $price*0.85;
               $sell = "<span class='fullPrice'>".$fullPrice."</span> ";
            }
   
            //----------------De prijs is in goede staat-----------------
   
            $price = round($price, 2);
            $price = ceil($price / 0.05) * 0.05;
            $price = number_format($price, 2);
   
            //----------------Uitvoer van het resultaat-----------------
   
            echo "<div class='result'>";
            echo "<div class='result__container _container'>";
            echo "<h2 class='result-maintext'>Order informatie:</h2>";
            $i = 0;
            while(isset($_POST['pizza'.$i]) && isset($_POST['nummer'.$i])) {
               echo "<p class='result-text'>Pizza: " . ${'pizza'.$i} . " , Aantal : " . ${'nummer'.$i} ." (" . ${'pricePizza'.$i} . " € per stuk)</p>";
               $i++;
            }
            echo "<p class='result-text'>Prijs: ".$sell . $price . " €</p>";
            echo "<p class='result-text'>Naam: " . $naam . "</p>";
            echo "<p class='result-text'>Adres: " . $adres . "</p>";
            echo "<p class='result-text'>Postcode: " . $postcode . "</p>";
            echo "<p class='result-text'>Plaats: " . $plaats . "</p>";
            echo "<p class='result-text'>Aanmaakdatum van de bestelling: " . $datum->format('Y-m-d H:i:s'). "</p>";
            echo "<p class='result-text'>Bezorgen: " . $bezorgen . "</p>";
            echo "</div>";
            echo "</div>";
         }else{
            echo "<div class='result'>";
            echo "<div class='result__container _container'>";
            echo "<h2 class='result-maintext'>Je hebt geen pizza ingevoerd!</h2>";
            echo "</div>";
            echo "</div>";
         }
      }
      ?>
      <footer class="footer">
         <div class="footer__container _container">
            <h1 class="footer__maintext">Pizza di mama</h1>
            <h2 class="footer__secondtext">Zoals uit de oven van moeder</h2>
         </div>
      </footer>
   </wrapper>
   <style type="text/css">
      *,
      *::before,
      *::after {
         padding: 0;
         margin: 0;
         border: 0;
         box-sizing: border-box;
      }
      a {
         text-decoration: none;
      }
      ul,
      ol,
      li {
         list-style: none;
      }
      img {
         vertical-align: top;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
         font-weight: inherit;
         font-size: inherit;
      }

      body{
         background-color: #ddd4d4;
         font-family: 'Roboto Slab';
         font-weight: 500;
         overflow-x: hidden;
      }
      .wrapper{
         min-height: 100%;
         display: flex;
         flex-direction: column;
         position: relative;
      }
      ._container{
         max-width: 1290px;
         margin: 0 auto;
         padding: 0px 15px;
      }
      h1{
         font-size: 40px;
         font-weight: 500;
      }
      h2{
         font-size: 30px;
         font-weight: 500;
      }

      /*------------------------HEADER---------------------------*/

      .header {
         background-color: #5f4a4a;
         position: sticky;
         top: 0;
         left: 0;
         z-index: 2;
      }
      .header__container {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 10px 15px;
      }
      .header__logo {
         width: 120px;
         cursor: pointer;
         transition: all 0.2s ease 0s;
      }
      .header__logo:hover{
         filter: drop-shadow(0px 0px 15px rgb(255, 151, 255));
      }
      .header__list {
         display: flex;
         align-items: center;
         gap: 50px;
         font-size: 20px;
      }
      .header__list-item {
         color: #fff;
         cursor: pointer;
      }
      .header__list-item:hover {
         text-decoration: underline;
      }

      /*------------------------MAIN---------------------------*/

      .main {
         background: url('img/Pizza.jpg') 0 35%/100% auto no-repeat;
      }
      .main__box{
         background-image: linear-gradient(90deg, transparent 0%, #000 25%, #000 75%, transparent 100%);
      }
      .main__container {
      }
      .main__text {
         margin: 100px 0px;
         padding: 10px 0px;
         color: #fff;
         text-align: center;
         display: flex;
         flex-direction: column;
         gap: 15px;
      }
      .main__maintext {
      }
      .main__secondtext {
      }
      @media (max-width:500px) {
         .main {
            background: url('img/Pizza.jpg') 0 0/100% auto no-repeat;
         }
         .main__text {
            margin: 65px 0px;
         }
      }

      /*------------------------TYPES---------------------------*/

      .types {
      }
      .types__container {
         padding: 50px 15px;
      }
      .types__block{
         display: flex;
         gap: 20px;
         justify-content: center;
      }
      .types__text {
         margin-top: 50px;
      }
      .types__maintext {
      }
      .types__box {
         width: 300px;
         display: grid;
         grid-template-columns: 1fr 1fr;
         border: 1px solid #000;
      }
      .types__box-name {
         border: 1px solid #000;
         display: flex;
         align-items: center;
         gap: 5px;
         padding: 0px 0px 0px 5px;
         text-align: center;
      }
      .types__box-img{
         width: 100px;
      }
      .types__box-price {
         border: 1px solid #000;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .korting{
         margin-top: 20px;
         text-align: right;
      }
      .korting p:not(:last-child){
         margin-bottom: 10px;
      }
      @media (max-width:630px) {
         .types__block{
            flex-direction: column;
         }
         .types__text{
            text-align: center;
         }
         .types__box{
            margin: 0 auto;
         }
      }
      @media (max-width:500px) {
         .types__container {
            padding: 20px 15px;
         }
      }

      /*------------------------FORMULIEREN---------------------------*/

      .formulieren {
      }
      .form__container {
         padding: 50px 15px;
      }
      .form__maintext {
         text-align: center;
      }
      .form {
         display: flex;
         flex-direction: column;
         gap: 10px;
         margin-top: 25px;
      }
      .form__item {
         padding: 20px 10px;
         border-radius: 5px;
         transition: all 0.2s ease 0s;
      }
      .form__item:focus{
         outline: 1px solid rgb(254, 81, 254);
         filter: drop-shadow(0px 0px 15px rgb(255, 151, 255));
      }
      .form__item-radio{
         padding: 5px 0px;
      }
      .form__radio {
         padding: 0px 0px;
      }
      .button__block{
         text-align: center;
      }
      .button{
         padding: 25px 50px;
         border-radius: 5px;
         cursor: pointer;
         outline: 2px solid transparent;
         transition: all 0.3s ease 0s;
      }
      .button:hover{
         outline: 2px solid rgb(254, 81, 254);
         filter: drop-shadow(0px 0px 15px rgb(255, 151, 255));
      }
      .pizzas_block{
         display: grid;
         grid-template-columns: auto auto;
         max-width: 345px;
         gap: 10px;
      }
      .pizzas_block .form__item {
         width: fit-content;
      }

      /*------------------------RESULTATEN---------------------------*/

      .result {
      }
      .result__container {
         padding: 50px 15px;
      }
      .result-maintext{
         text-align: center;
         margin-bottom: 20px;
      }
      .result-text:not(:last-child) {
         margin-bottom: 15px;
      }
      .fullPrice{
         text-decoration: line-through;
      }
      .red{
         color: red;
      }

      /*------------------------FOOTER---------------------------*/

      .footer {
         text-align: center;
         color: #fff;
         background-color: #5f4a4a;
         padding: 50px 0px;
      }
      .footer__container{
      }
      .footer__maintext {
         margin-bottom: 15px;
      }
      .footer__secondtext {
      }
   </style>
   <script>
      var pizzaNum = 1;
var numNum = 1;

function newPizzaBlock(pizzaNum, numNum) {
    console.log('Yes 3');
    var newDiv = document.createElement("div"); 
    newDiv.className = "pizzas_block";

    // Додаємо HTML-код до нового div
    newDiv.innerHTML = `
        <p>Pizza:</p>
        <p>Aantal:</p>
        <select class="form__item" name="pizza`+ pizzaNum +`">
            <option value="none">Maak uw keuze</option>
            <option value="Margherita">Margherita</option>
            <option value="Funghi">Funghi</option>
            <option value="Marina">Marina</option>
            <option value="Hawai">Hawai</option>
            <option value="Quattro_Formaggi">Quattro Formaggi</option>
        </select>
        <input type="number" class="form__item" name="nummer`+ numNum +`" placeholder="Aantal pizza's" required>
    `;

    // Отримуємо останній елемент з класом 'pizzas_block'
    var lastPizzaBlock = document.getElementsByClassName('pizzas_block')[document.getElementsByClassName('pizzas_block').length - 1];

    // Додаємо новий div після останнього 'pizzas_block'
    lastPizzaBlock.parentNode.insertBefore(newDiv, lastPizzaBlock.nextSibling);
};

var pizzaBlock = document.getElementById('morePizzaButton');
console.log('Yes');
pizzaBlock.addEventListener('click', function (e) {
   e.preventDefault();
    newPizzaBlock(pizzaNum, numNum);
    pizzaNum += 1;
    numNum += 1;
    console.log('Yes 2');
});
   </script>
</body>
</html>