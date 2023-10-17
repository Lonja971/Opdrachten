<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width,initial-scale=1.0,
		maximum-scale=1.0, user-scalable=0">
   <title>Rente berekenen</title>
</head>
<body>
   <wrapper class="wrapper">
      <main class="main">
         <div class="main__container _container">
            <h1 class="maintext">Rente Berekenen</h1>
         </div>
      </main>
      <div class="form__container _container">
         <div class="content">
            <form method="post" action="" class="form">
               <div class="form__input">
                  <div class="form__input-box">
                     <p class="form__text">Ingelegd bedrag:</p>
                     <input type="number" class="form__item" name="bedrag" required>
                  </div>
                  <div class="form__input-box">
                     <p class="form__text">Rentepercentage:</p>
                     <input type="number" class="form__item" name="rentepercentage" required>
                  </div>
               </div>
               <div class="form__radio">
                  <p><input type="radio" name="eindbedrag" value="10jaar" class="radio-item" required>Eindbedrag na 10 jaar</input></p>
                  <p><input type="radio" name="eindbedrag" value="verdubbeld" class="radio-item">Eindbedrag verdubbeld</input></p>
               </div>
               <div class="button__block">
                  <button type="submit" name="submit" class="button">Bereken</button>
               </div>
            </form>
            <?php
               if(isset($_POST["submit"])){
                  $bedrag = $_POST["bedrag"];
                  $rentepercentage = $_POST["rentepercentage"];
                  $eindbedrag = $_POST["eindbedrag"];

                  echo '<div class="answer">';
                  echo '<div class="answer__box">';
                  echo '<p class="answer__box-text">Jaar</p>';
                  echo '<p class="answer__box-text">Bedrag</p>';

                  if ($eindbedrag == '10jaar'){
                     $forBedrag = $bedrag;
                     for ($jaar = 1; $jaar <= 10; $jaar++){
                        $forBedrag = $forBedrag*(1+$rentepercentage/100);

                        $formatted_number = number_format($forBedrag, 2);
                        $formatted_number = number_format($forBedrag, 2);

                        echo '<p class="answer__box-text">'.$jaar.'</p>';
                        echo '<p class="answer__box-text">'.$formatted_number.'</p>';
                     };
                  }elseif ($eindbedrag == 'verdubbeld'){
                     $forBedrag = $bedrag;
                     for ($jaar = 1; $jaar <= 15; $jaar++){
                        $forBedrag = $forBedrag*(1+$rentepercentage/100);

                        $formatted_number = number_format($forBedrag, 2);
                        $formatted_number = number_format($forBedrag, 2);

                        echo '<p class="answer__box-text">'.$jaar.'</p>';
                        echo '<p class="answer__box-text">'.$formatted_number.'</p>';
                     };
                  }
                  echo '</div>';
                  echo '</div>';
               };
            ?>
         </div>
      </div>
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

         body {
            font-family: "Roboto Slab";
            font-weight: 500;
            overflow-x: hidden;
            background-color: #f0e4e4;
         }
         .wrapper {
            min-height: 100%;
            position: relative;
         }
         ._container {
            max-width: 1290px;
            margin: 0 auto;
            padding: 0px 15px;
         }
         h1 {
            font-size: 40px;
            font-weight: 500;
         }
         h2 {
            font-size: 30px;
            font-weight: 500;
         }

         /*------------------------MAIN---------------------------*/

         .main {
         }
         .main__container {
            padding: 50px 0px;
         }
         .maintext {
            text-align: center;
         }

         /*------------------------FORM---------------------------*/

         .form__container {
         }
         .content {
            display: flex;
            margin-right: auto;
            gap: 80px;
            flex-wrap: wrap;
            justify-content: center;
         }
         .form {
            display: flex;
            flex-direction: column;
            gap: 25px;
         }
         .form__input {
         }
         .form__input-box {
            display: flex;
            align-items: center;
            gap: 5px;
         }
         .form__input-box:not(:last-child) {
            margin-bottom: 15px;
         }
         .form__text {
         }
         .form__item {
            border: 1px solid #000;
            background-color: transparent;
            padding: 8px 12px;
            border-radius: 5px;
         }
         .form__item:focus{
            background-color: #fff1f1;
         }
         .form__radio p {
            line-height: 150%;
         }
         .form__item-radio:not(:last-child) {
            margin-bottom: 15px;
         }
         .radio-item{
            margin-right: 5px;
         }
         .button__block {
            margin: 0 auto;
         }
         .button {
            padding: 10px 30px;
            outline: 2px solid #000;
            border-radius: 5px;
            transition: all 0.2s ease 0s;
            background-color: transparent;
            font-size: 18px;
            font-weight: 500;
         }
         .button:hover{
	         box-shadow: 5px 5px 25px #5f4a4a;
            background-color: #fff1f1;
         }

         /*------------------------ANSWER---------------------------*/

         .answer {
         }
         .answer__box {
            display: grid;
            gap: 3px;
            grid-template-columns: auto auto;
            border: 2px solid #000;
            padding: 3px;
         }
         .answer__box-text {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #000;
            padding: 6px 12px;
         }
   </style>
</body>
</html>