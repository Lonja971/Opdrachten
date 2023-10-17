<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width,
   ↪→ initial-scale=1.0">
   <title>PHP opdracht - vertaler</title>
</head>
<body>

   <form method="post" action="">
   Naam: <input type="text" name="naam" placeholder="Uw ↪→ naam" required/>
   <br />
   Land:
   <select name="land">
   <option value="default">Maak uw keuze</option>
   <option value="NL">Nederland</option>
   <option value="DE">Duitsland</option>
   <option value="EN">Engeland</option>
   <option value="UA">Ukraine</option>
   </select>
   <br />
   <input type="submit" name="submit" value="gegevens
   ↪→ versturen"/>
   </form>
   <?php
      if(isset($_POST["submit"])){
         $naam = $_POST["naam"];
         $land = $_POST["land"];
         if($land == "default") {
            echo 'Selecteer alstublieft een land.';
         } else {
            switch($land){
               case 'NL':
                  echo 'Goedemorgen '.$naam;
                  break;
               case 'DE':
                  echo 'Guten Morgen '.$naam;
                  break;
               case 'EN':
                  echo 'Good morning '.$naam;
                  break;
               case 'UA':
                  echo 'Добрий ранок '.$naam;
                  break;
               default:
                  echo 'Hello '.$naam;
                  break;
            }
         }
      }
   ?>
</body>
</html>