// function to show weather details using fetch
function weather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bea017799de33aeb106c1922c663f1db&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        alert(
          `Tempature : ${data.main.temp}°C \nHumidity : ${data.main.humidity}% \nPressure : ${data.main.pressure} \nWind : ${data.wind.speed}km/h`
        );
        console.log(data);
      });
  };
  
  //function to show countries details in a card
  async function logCountry() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let countries = await response.json();
  
    let container = document.createElement("div");
    container.setAttribute("class", "container");
  
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "title");
    h1.setAttribute("class", "text-center");
    h1.innerText = "Countries";
    container.appendChild(h1);
    
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    
    for (let i = 0; i < countries.length; i++) {
      let col = document.createElement("div");
      col.setAttribute("class", "col-lg-4 col-sm-12 g-3");
    
      let card = document.createElement("div");
      card.setAttribute("class", "card h-100");
  
      let cardHeader = document.createElement('div');
      cardHeader.setAttribute('class','card-header text-center bg-dark');
      cardHeader.style.color= "white";
      cardHeader.innerText = countries[i].name.common;
      card.appendChild(cardHeader);
  
      let cardBody = document.createElement('div');
      cardBody.setAttribute('class','card-body text-center bg-light');
      cardHeader.style.backgroundColor = "grey";
      card.appendChild(cardBody);
  
      let img = document.createElement('img');
      img.setAttribute('class','img-fluid');
      img.src= countries[i].flags.svg;
      cardBody.appendChild(img);
  
      let capital =document.createElement('h5');
      capital.setAttribute('class','card-text');
      capital.innerText = `\n Capital : ${countries[i].capital}`;
      cardBody.appendChild(capital);
  
      let region =document.createElement('h5');
      region.setAttribute('class','card-text');
      region.innerText = `\n Region : ${countries[i].region}`;
      cardBody.appendChild(region);
  
      let countryCode =document.createElement('h5');
      countryCode.setAttribute('class','card-text');
      countryCode.innerText = `\n Contry Code : ${countries[i].cca3} \n`;
      cardBody.appendChild(countryCode);
  
      let button = document.createElement('button');
      button.setAttribute('class','btn btn-primary');
      button.onclick = ()=> {
        weather(countries[i].latlng[0],countries[i].latlng[1]);
      }
      button.innerHTML =`Check For Weather`;
      cardBody.appendChild(button);
  
      col.appendChild(card);
      row.appendChild(col);
    }
    container.appendChild(row);
    document.body.append(container);
  }
  logCountry();
  
  
  
  