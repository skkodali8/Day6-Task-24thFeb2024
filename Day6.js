// 1.	Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).//

// a. Get all the countries from Asia continent /region using Filter function//

const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest()
        xhr.open("GET","https://restcountries.com/v3.1/all")
        xhr.send()
        xhr.onload = function(){
        //console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        let asiaFilter = (asia) => {
                return asia.region === "Asia";
            }
            let asia =  data.filter(asiaFilter);
            console.log(asia);

        }

// //------------------------------------------------------------------------------------------------------------------------------//

// // b. Get all the countries with a population of less than 2 lakhs using Filter function //

const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest()
        xhr.open("GET","https://restcountries.com/v3.1/all")
        xhr.send()
        xhr.onload = function(){
        //console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        let populationFilter = (country) => {
            if(country.population < 200000){
                return country.name.common;
            }else{
                return false;
            }
        }
            let countries =  data.filter(populationFilter);
            console.log(countries);

        }

// //------------------------------------------------------------------------------------------------------------------------------//


// // c.	Print the following details name, capital, flag, using forEach function //

const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest()
        xhr.open("GET","https://restcountries.com/v3.1/all")
        xhr.send()
        xhr.onload = function(){
        //console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);

        data.forEach(myFunction);

        function myFunction(data){
            console.log(` Country's name is ${data.name.official},it's Capital is ${data.capital} & it's Flag is ${data.flags.png}`);
        }
        }

// //------------------------------------------------------------------------------------------------------------------------------//


// // d.	Print the total population of countries using reduce function//

const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest()
        xhr.open("GET","https://restcountries.com/v3.1/all")
        xhr.send()
        xhr.onload = function(){
        //console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        let totalPopulation = [];
        for(let i = 0; i < data.length; i++){
        totalPopulation.push(data[i].population);
        }
        let totalPopulationSum = (previousValue,currentValue) =>{
            return previousValue + currentValue;
        }
        let sum = totalPopulation.reduce(totalPopulationSum);
        console.log(`The total population of countries is ${sum}`);
    }

//------------------------------------------------------------------------------------------------------------------------------//


// e.Print the country that uses US dollars as currency.//

const XMLHttpRequest = require("xhr2");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.responseText);
  for (let i = 0; i < data.length; i++){
    const currencies = data[i].currencies;
    if (currencies && currencies.includes("USD")) {
      console.log(data[i].currencies);
    }
  }
};


//------------------------------------------------------------------------------------------------------------------------------//
