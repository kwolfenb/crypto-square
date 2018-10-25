// this ["arrayCoded" + x] = [];
var outputArray = []

var cryptoSquare = function(userInput) {

  var onlyCharInput = userInput.split("").filter(char => char.toUpperCase() != char.toLowerCase());

  for (x = 1; x < 100; x++) {
    var squareNumber = Math.pow(x, 2);

    if (squareNumber >= onlyCharInput.length){
      break;
    }
  }
  for (y = 0; y < x; y++){
    outputArray.push(onlyCharInput[0 + y]);
    outputArray.push(onlyCharInput[x + y]);
    outputArray.push(onlyCharInput[2*x + y]);
    outputArray.push(onlyCharInput[3*x + y]);
    outputArray.push(onlyCharInput[4*x + y]);
    outputArray.push(onlyCharInput[5*x + y]);
    outputArray.push(onlyCharInput[6*x + y]);
    outputArray.push(onlyCharInput[7*x + y]);
    outputArray.push(onlyCharInput[8*x + y]);
    outputArray.push(onlyCharInput[9*x + y]);
    outputArray.push(onlyCharInput[10*x + y]);

  }

  var joinedOutputArray = outputArray.join('');
  let sentenceOutput = "";

  for (b = 5; b < (joinedOutputArray.length*5); b = b + 5){
    var c = (b-5);
    sentenceOutput += joinedOutputArray.slice(c, b) + " ";
  }

  return sentenceOutput;
}


$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputNumber = $("#DecimalNumber").val();
    $("#output").text(cryptoSquare(inputNumber));
  });
});
