let xhr = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";
xhr.open("GET",url,true);
xhr.onload = () =>  {
    // converting JSON to js
    let countries =JSON.parse(xhr.responseText);
    console.log(countries);
     console.log("Get all the countries from Asia continent /region using Filter function");
     console.log("\n");
     let asianCountries = countries.filter ((i) => {
        return i.region =="Asia";
     });
     for(let i =0;i<asianCountries.length;i++) {

        console.log(`${i+1}.${asianCountries[i].name.common}`);
      
  }
  console.log("Get all the countries with a population of less than 2 lakhs using Filter function"); 
  let twoLakhPopulation = countries.filter((i) => {
    return i.population<200000;
  });

  for(let i =0;i<twoLakhPopulation.length;i++) {

    console.log(`${i+1}.${twoLakhPopulation[i].name.common} - ${twoLakhPopulation[i].population}`);
  
}

console.log("Print the following details name, capital, flag, using forEach function");

countries.forEach(i => {
    console.log(`Name of the Country : ${i.name.common}`);
    console.log(`Capital of the Country : ${i.capital}`);
    console.log(`Flag of the Country : ${i.flag}`);
    console.log(`\n`)
    
});

console.log("Print the total population of countries using reduce function");
let populationArray=[];
for(let i =0;i<countries.length;i++){
    populationArray.push(countries[i].population);
}
// console.log(populationArray);

let totalPopulation =populationArray.reduce((i,j)=>{
     return i+j;
});
console.log("Total population of countries :",totalPopulation);
console.log(`\n`);

console.log("Print the country that uses US dollars as currency.");
console.log(`\n`);
 
let usdCountries =countries.filter((country) =>{
    if(country.currencies !== undefined)
     if(country.currencies.USD!==undefined){
        console.log(country.name.common);
     }
    
});
console.log(`\n *****************Thank You***************** `);
}
xhr.send();