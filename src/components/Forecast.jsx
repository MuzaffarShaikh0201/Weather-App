import Card from './forecast_cards/Card'
import { useEffect, useState } from 'react';
import Loading from '../loading_animations/Loading';

export default function Forecast(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [forecastData, setForecastData] = useState({});
    const stop = 0

    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&units=metric&cnt=10&appid=${API_KEY}`)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setIsLoaded(true);
    //             setForecastData(result);
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     )
    // }, [stop])

    useEffect(() => {
        fetch(`/.netlify/functions/serverless2?lat=${props.lat}&lng=${props.lon}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setForecastData(result);
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
        // console.log(forecastData)
        const cardElement = forecastData.list?.map((item) => {
            return (
                <Card 
                    key={item.dt}
                    cardImg={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    weather={item.weather[0].main}
                    temp={item.main.temp}
                    time={item.dt_txt.slice(11, 13)}
                />
            )
        })
    
        return (
            <footer>
                {cardElement}
            </footer>
        )
    }
}