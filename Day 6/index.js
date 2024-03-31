let a = [23,45,678,90,33,21,780,670,498,58940,6565,900,3701299,1300];
 
let filterResult = a.filter((item) => {
    return item % 10 = 0;
});

console.log(filterResult);