//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;


    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual);
   
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
 
    document.getElementById("tip").innerHTML = total;
  
  }
  
  

  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };