import WeatherDeatails from './weather_components/WeatherDetails';
import WeatherTitle from './weather_components/WeatherTitle';
import { useEffect, useState } from 'react';
import Loading from '../loading_animations/Loading';

export default function Main(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const stop = 0;

    useEffect(() => {
        fetch(`/.netlify/functions/serverless?lat=${props.lat}&lng=${props.lon}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setWeatherData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [stop])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <main>
                <WeatherTitle 
                    city={weatherData.name} 
                    country={weatherData.sys.country}    
                    weatherMain={weatherData.weather[0].main}   
                    weatherIcon={weatherData.weather[0].icon}   
                    weatherDesc={weatherData.weather[0].description}
                />
                <WeatherDeatails 
                    mainTemp={weatherData.main.temp}  
                    feelTemp={weatherData.main.feels_like}  
                    tempMax={weatherData.main.temp_max}  
                    tempMin={weatherData.main.temp_min}  
                    humidity={weatherData.main.humidity}  
                    clouds={weatherData.clouds.all}  
                    visiblity={weatherData.visibility}  
                    windSpeed={weatherData.wind.speed}  
                    windDir={weatherData.wind.deg}
                />
            </main>
        )
    }
}