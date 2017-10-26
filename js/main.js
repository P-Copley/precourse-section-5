var used=[], capitals =["Washington DC","London ","Paris ","Rome","Amsterdam","Moscow","Sarajevo","Oslo","Athens","Zagreb","Lisbon","Warsaw","Kiev","Madrid","Vienna"];
var r = Math.floor(Math.random()*capitals.length)
var word =capitals[r].toLowerCase().split("");
var count =0;
$(document).ready(() => {

  function alphabet(){
    for(var i=97; i<123; i++){
      $("#letters").append("<td id="+String.fromCharCode(i)+">"+String.fromCharCode(i)+"</td>")
    }
  }
  //genanswer makes "_"'s for hidden letters and sets id's to identify letters.
  function genanswer(){
    for(var i=0; i<word.length; i++){
      if (/[a-zA-Z]/.test(word[i])){
        $(".answer").append("<td id=a"+word[i]+">_</td><td>&nbsp;&nbsp;</td>")
      } else {
        $(".answer").append("<td>"+word[i]+"</td><td>&nbsp;&nbsp;</td>")
      }
    }
  }
  alphabet();
  genanswer();
// keypress adds the pressed key to used and if id matches reveals correct letters
  $(document).keypress(function() {
    var guess =String.fromCharCode(event.which).toLowerCase();
    if (/[a-z]/.test(guess)){
      if (used.indexOf(guess) === -1){
        $("#guess").append(guess);
        if (word.indexOf(guess) === -1 && used.indexOf(guess) === -1){
          if (count <6){
            count ++;
            $(".gallows img").attr("src","images/"+count+".jpg")
          }
        }
        used.push(guess);
      };
      $("#"+guess+"").css("color","red");
      $("[id=a"+guess+"]").html("<u>"+guess+"</u>")
      end();
    }
  })
// end checks to see if complete or out of lives.
  function end(){
    if (count === 6){
      document.getElementById("lose").style.display = "block";
      $("#lose").animate({opacity:"1",height:"100px"},"slow");
    }
    if ($(".answer").text().includes("_") === false){
      document.getElementById("win").style.display = "block";
      $("#win").animate({opacity:"1",height:"100px"},"slow");
    }
  }
});

// generate a new word from the array.
function newWord(){
  location.reload();
}
// show the answer
function reveal(){
  for (var i=0; i<word.length; i++){
    $("[id=a"+word[i]+"]").html("<u>"+word[i]+"</u>")
  }
}

// Account for caps and space

/*
extras - difficulty levels / styling
*/
