let xhr =new XMLHttpRequest();
xhr.open("GET","index.JSON",true);

xhr.onload =function() {
let resume = JSON.parse(xhr.responseText);
console.log(resume);
console.log(" >>RESUME<<");
console.log(`\n`);

    for(let k in resume.basics) {   //for in loop

        if(k=="name"){
            console.log(`Name of the Candidate : ${resume.basics[k]}`);
        }
        if(k=="fathername"){
            console.log(`Father's Name : ${resume.basics[k]}`);
        }
        if(k=="mothername"){
            console.log(`Mother's Name : ${resume.basics[k]}`);
        }
        if(k=="email"){
            console.log(`Email-ID : ${resume.basics[k]}`);
        }
        if(k=="phone"){
            console.log(`Contact Number : ${resume.basics[k]}`);
        }
        if(k=="dob"){
            console.log(`Date Of Birth : ${resume.basics[k]}`);
        }
        if(k=="location"){
            console.log(`Address : ${resume.basics[k]}`);
        }  
        
        if(k=="about"){
            console.log(`About : ${resume.basics[k]}`);
        }    
}
console.log(`\n`);
console.log("*** EDUCATION ***");
console.log(`\n`);
for(let k in resume.education) {  //for in loop

    if(k=="school"){
        console.log(`Name of the school : ${resume.education[k]}`);
    }
    if(k=="College"){
        console.log(`Name of the College : ${resume.education[k]}`);
    }
    if(k=="degree"){
        console.log(`Degree : ${resume.education[k]}`);
    }
    if(k=="Year"){
        console.log(`PassedOut Year : ${resume.education[k]}`);
    }
    if(k=="percentage"){
        console.log(`Percentage Earned In College : ${resume.education[k]}`);
    }
}
console.log(`\n***SKILLS***`);
console.log(`\n`);
for(let i =0;i<resume.skills.length;i++) {  //for loop
    console.log(`        ${i+1}) ${resume.skills[i]}`);
}
console.log(`\n >>CERTIFICATES<<`);
console.log(`\n`);
resume.certificates.forEach(i => { //foreach loop
    console.log(`       - ${i}`);
    
});
console.log(`\n >>>HOBBIES<<<`);
console.log(`\n`);
for(let hobby of resume.hobbies){  //for of loop
   console.log(`        -${hobby}`);
}
}
xhr.send();