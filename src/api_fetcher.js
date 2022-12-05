
export let getWeather = async (location) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8aa89cdd2e5aa1dfcceb25020ccbc280`);
    let data     = await response.json();
    return data
}
export let getGif = async (sTerm) =>{
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=59sFW1yf83tBLLoSNohZLfv2N6jn1Dse&s=${sTerm} sky`,{mods:'cors'});
    let data     = await response.json()
    return data
}