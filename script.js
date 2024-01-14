const card= document.querySelector('.card');
const search= document.querySelector('.card button');
const error= document.querySelector('.not-found');
const weather_box= document.querySelector('.weather-box');
const details= document.querySelector('.detail');

search.addEventListener('click', ()=>{
    const APIkey = '29a9857df4271954c54017995490fb52';
    const city= document.querySelector('.card input').value;

    if(city == "")  return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(responce => responce.json()).then(json => {

        if(json.cod == '404' || json.cod =='401'){
            card.style.height= '400px';
            weather_box.classList.remove('active');
            details.classList.remove('active');
            error.classList.add('active');
            return;
        }
        card.style.height= '500px';
        weather_box.classList.add('active');
        details.classList.add('active');
        error.classList.remove('active');

        const image = document.querySelector('.photu');
        const temperature = document.querySelector('.temperature');
        const description = document.querySelector('.desc');
        const humidity = document.querySelector('.humidity .value');
        const wind = document.querySelector('.wind .value');

        switch(json.weather[0].main){
            case 'Clear':
                image.src='images/clear.png'
                break;
            case 'Cloud':
                image.src='images/cloud.png'
                break;            
            case 'Mist':
                image.src='images/mist.png'
                break;           
            case 'Haze':
                image.src='images/mist.png'
                break;
            case 'Rain':
                image.src='images/rain.png'
                break;
            case 'Snow':
                image.src='images/snow.png'
                break;
            default :
                image.src='images/cloud.png'
            }

            temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML=`${json.weather[0].description}`;
            humidity.innerHTML=`${json.main.humidity}%`;
            wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
    }) ;
} );