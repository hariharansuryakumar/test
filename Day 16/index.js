const countDown = document.getElementById('countDown');

setTimeout(()=>{
    countDown.textContent="9";
    setTimeout(()=>{
        countDown.textContent="8";
        setTimeout(()=>{
            countDown.textContent="7";
            setTimeout(()=>{
                countDown.textContent="6";
                setTimeout(()=>{
                    countDown.textContent="5";
                    setTimeout(()=>{
                        countDown.textContent="4";
                        setTimeout(()=>{
                            countDown.textContent="3";
                            setTimeout(()=>{
                                countDown.textContent="2";
                                setTimeout(()=>{
                                    countDown.textContent="1";
                                    setTimeout(()=>{
                                        countDown.textContent="Happy Independence Day!";   
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000) ;
        },1000);
    },1000);
},1000);