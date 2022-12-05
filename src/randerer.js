let kelvin=true;

export function createCard(data,gif){
    const card = document.createElement('div');
    card.classList.add('card');

    //header 
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = data.name;
    cardHeader.appendChild(cardTitle);

    //center
    const cardCenter = document.createElement('div');
    cardCenter.classList.add('card-center');
    const cardIcon = document.createElement('img');
    cardIcon.classList.add('card-icon');
    cardIcon.src = gif.data.images.original.url;
    const tempContainer = document.createElement('div');
    tempContainer.classList.add('temp-container');
    const temp = document.createElement('h1');
    temp.classList.add('temp');
    temp.textContent = Math.floor(data.main.temp);
    temp.addEventListener('click',(e)=>{
        let minmax = document.querySelector('.minmax-value');
        temp.textContent = changeTemp(parseInt(temp.textContent));
        minmax.textContent = `${changeTemp(parseInt(minmax.textContent.split('/')[0]))}/${changeTemp(parseInt(minmax.textContent.split('/')[1]))}`;
        let feels_like = document.querySelector('.feels-like-value');
        feels_like.textContent = changeTemp(parseInt(feels_like.textContent));
        
        if(kelvin === false)
            kelvin = true
        else
            kelvin = false
    })
    const state = document.createElement('p');
    state.classList.add('weather-state');
    state.textContent = data.weather[0].main;
    tempContainer.appendChild(temp);
    tempContainer.appendChild(state);
    cardCenter.appendChild(cardIcon);
    cardCenter.appendChild(tempContainer);

    //footer
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const minMaxContainer = document.createElement('div');
    minMaxContainer.classList.add('minmax-temp');
    minMaxContainer.classList.add('footer-div')
    const minMaxTitle = document.createElement('p');
    minMaxTitle.classList.add('minmax-title');
    minMaxTitle.textContent = "temp";
    const minMaxValue = document.createElement('p');
    minMaxValue.classList.add('minmax-value');
    minMaxValue.textContent = `${Math.floor(data.main.temp_min)}/${Math.floor(data.main.temp_max)}`;
    minMaxContainer.appendChild(minMaxTitle);
    minMaxContainer.appendChild(minMaxValue);
    
    const feelsLikeContainer = document.createElement('div');
    feelsLikeContainer.classList.add('feels-like');
    feelsLikeContainer.classList.add('footer-div');
    const feelsLikeTitle = document.createElement('p');
    feelsLikeTitle.classList.add('feels-like-title');
    feelsLikeTitle.textContent = "Feels like";
    const feelsLikeValue = document.createElement('p');
    feelsLikeValue.classList.add('feels-like-value');
    feelsLikeValue.textContent = Math.floor(data.main.feels_like);
    feelsLikeContainer.appendChild(feelsLikeTitle);
    feelsLikeContainer.appendChild(feelsLikeValue);
    cardFooter.appendChild(minMaxContainer);
    cardFooter.appendChild(feelsLikeContainer);

    card.appendChild(cardHeader);
    card.appendChild(cardCenter);
    card.appendChild(cardFooter);

    return card;

}

function changeTemp(data){
    if(kelvin === true){

        return Math.floor(data - 273);
        
    }
    else{

        return Math.floor(data + 273);
        
    }
}
