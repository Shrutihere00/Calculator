const getHistory = () => {
  return document.querySelector("#history-value").innerText;
};
const printHistory = (num) => {
  return (document.querySelector("#history-value").innerText = num);
};
const getOutput = () => {
  return document.querySelector("#output-value").innerText;
};
const printOutput = (num) => {
  if (num === "") {
    return (document.querySelector("#output-value").innerText = num);
  } else {
    return (document.querySelector("#output-value").innerText =
      getFormattedNumber(num));
  }
};

const getFormattedNumber = (num) => {
  if(num=="-"){
    return "";
  }
  var n = Number(num);
  return n.toLocaleString("en");
};
const reverseNumberFormat = (num) => {
  return Number(num.replace(/,/g, ""));
};
var operators = document.querySelectorAll(".operator");
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id === "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else{
      var output=getOutput();
      var history=getHistory();
      if(output==""&&history!=""){
        if(isNaN(history[history.length-1])){
          history=history.substr(0,history.length-1); 
        }
      }
      if(output!=""||history!=""){
        output=output=""?output:reverseNumberFormat(output);
        history=history+output;
        if(this.id=="="){
          var result=eval(history);
          printOutput(result)
          printHistory("");
        }
        else{
          history=history+this.id;
          printHistory(history)
          printOutput("")
        }
      }
    }
  });
}

var numbers = document.querySelectorAll(".number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
