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
             
              setTimeout(function () {
                counterdownElement.textContent = "2";
               
                setTimeout(function () {
                  counterdownElement.textContent = "1";

                  setTimeout(function () {
                    counterdownElement.textContent = "Happy Independence Day!!";
                    counterdownElement.style.color = "Gold"

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