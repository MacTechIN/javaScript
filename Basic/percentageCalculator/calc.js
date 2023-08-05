var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2'); 
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function() {
    //여기에 이벤트 결과를 넣는다.
   if (!numField1.value || !numField2) {
        alert("Please enter values in the fields");

   }
   else { 
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var result = x/y; 
    var percent = result * 100;  

    resultField.innerText = "Answer: " + percent +  "% " ; 
    event.preventDefault(); 
 }   
 
});
