// ID for an element to display the countdown
var counterdownElement = document.getElementById("countdown");
9
setTimeout(function () {
  counterdownElement.textContent = "9";
  
  setTimeout(function () {
    counterdownElement.textContent = "8";
   
    setTimeout(function () {
      counterdownElement.textContent = "7";
      
      setTimeout(function () {
        counterdownElement.textContent = "6";
        
        setTimeout(function () {
          counterdownElement.textContent = "5";
          
          setTimeout(function () {
            counterdownElement.textContent = "4";
            setTimeout(function () {
              counterdownElement.textContent = "3";
              counterdownElement.style.color = "orange";
              setTimeout(function () {
                counterdownElement.textContent = "2";
                counterdownElement.style.color = "white";
                setTimeout(function () {
                  counterdownElement.textContent = "1";
                  counterdownElement.style.color = "green";
                  setTimeout(function () {
                    counterdownElement.textContent = "Happy Independence Day!!";
                    counterdownElement.style.color = "black"
                var img = document.body.createElement ("img");
                
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);