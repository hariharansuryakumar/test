console.log("Q:3. USE THE REST COUNTRIES AND PRINT ALL THE COUNTRIES NAMES,REGION,SUB-REGION AND POPULATIONS");
console.log("\n");

let xhr = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";
xhr.open("GET",url,true);
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);

for(let i=0; i<countries.lenth;i++)
{
    console.log("Name of the country",countries[i].name.common);
    // console.log("region of the country",countries[i].region);
    // console.log("sub-region of the country",countries[i].subregion);
    // console.log("population of the country",countries[i].population);
console.log("\n");
}
 }
xhr.send();
