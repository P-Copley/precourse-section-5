var used=[], it=["Qqwerty","foobar"], capitals =["London","Paris"];
var word =it[0].toLowerCase().split("");
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
      $(".answer").append("<td id=a"+word[i]+">_</td><td>&nbsp;,&nbsp;</td>")
    }
  }
  genanswer();
  alphabet();
// keypress adds the presses key to used and if id matches reveals correct letters
  $(document).keypress(function() {
    var guess =String.fromCharCode(event.which).toLowerCase();
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
  })

  function end(){
    if (count === 6){
      document.getElementById("lose").style.display = "block";
      $("#lose").animate({opacity:"1",height:"100px"},"slow");
    }
  }
});

function reveal(){
  for (var i=0; i<word.length; i++){
    $("[id=a"+word[i]+"]").html("<u>"+word[i]+"</u>")
  }
}
// Account for caps and space

/*
variables: list of letters, chosen letters, remaining letters, hangman image + end condition,
arrays - list of words + cats, catarr[ans,ans,ans], stored letters to prevent reuse
jquery events, inputs -> start with list of letters, then add keystrokes,
extras - difficulty levels
*/
