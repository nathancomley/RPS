<script>
                  /* This is a simplified version of the game.
          The Computer ALWAYS picks ROCK.  
          Does the user's choose win,lose, or tie vs ROCK? */

          function say(myMessage){
          var msg = new SpeechSynthesisUtterance(myMessage);
window.speechSynthesis.speak(msg);
}

          function play(user) {
              let result = "";
              if (user === 'rock') {
                  result = "tie";
              } 
              if (user === 'paper') {
                  result = "win";
              }
              if (user === 'scissors') {
                  result = "lose";
              }
              var theMessage = "Computer chose rock, you " + result + "!"
              alert(theMessage);
              say(theMessage);
          }
</script>