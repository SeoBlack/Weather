import { createCard } from "./randerer";
import { getWeather,getGif } from "./api_fetcher";


const goBtn      = document.querySelector(".search-btn");
const userInput  = document.querySelector('.cityname-input');
goBtn.addEventListener('click',()=>{
    if (userInput.value === undefined) return
    const data = getWeather(getDataFromForm(userInput.value)).then(weather => {
        const content = document.querySelector('.content');
        content.textContent = '';
        getGif(weather.weather[0].main).then(url =>{
            content.appendChild(createCard(weather,url));
        })
        
        console.log(weather)
    }).catch(err =>{
            alert("enter a valid city ")
    });
} )

function getDataFromForm(cityName) {
    return cityName
      .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
      .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call

}
















// const content = document.querySelector('.content');
// content.appendChild(createCard(data));



