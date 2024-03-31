console.log("Q:1. How to compare two JSON, have the same properties without order");
let obj1 = {name : "person 1", age:5};
let obj2 = {age :5, name : "person 1" };

function areObjectsEqual(obj1,obj2)
{
    let key1= Object.keys(obj1);
    let key2=Object.keys(obj2);
    if(key1.length!==key2.length) 
    {
        return false;
    }
    for(let i = 0;i<key1.length;i++) {
        if (obj1[key1[i]]===obj2[key1[i]])
        {
            return true;
        } else{
            return false;
        }
    }
    return false;
}

let result = areObjectsEqual(obj1,obj2);
console.log(result);
console.log("\n");

let xhr = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";
xhr.open("GET",url,true);
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);
    console.log("Q:2. USE REST COUNTRIES API URL AND DISPLAY ALL THE COUNTRIES FLAG IN THE CONSOLE");
    console.log("\n");

    for(let i = 0;i<countries.length;i++) 
    {
        console.log(countries[i].name.common ,"'s flag :", countries[i].flag);
       
    }
    console.log("\n");
    console.log("Q:3. USE THE REST COUNTRIES AND PRINT ALL THE COUNTRIES NAMES,REGION,SUB-REGION AND POPULATIONS");
console.log("\n");

for(let i = 0;i<countries.length;i++) 
    {
        
        console.log("Name of the country",countries[i].name.common);
        console.log("region of the country",countries[i].region);
        console.log("sub-region of the country",countries[i].subregion);
        console.log("population of the country",countries[i].population);
        console.log("\n");
    }
    console.log("\n");
}
xhr.send();

