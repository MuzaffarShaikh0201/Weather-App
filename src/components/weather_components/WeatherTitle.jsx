import location_logo from '../../assets/pin-5-24.png'

export default function WeatherDeatails(props) {
    let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let current = new Date();
    let dateStr = `${weekDays[current.getDay()]} ${current.getDate()} ${month[current.getMonth()]}, ${current.getFullYear()}`;

    return (
        <div className="weather-title">
            <div className="location">
                <img src={location_logo} className="location-logo" alt="."/>
                <h4 className="location-text">{props.city}, {props.country}</h4>
            </div>
            <img src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`} className="weather-title-img"/>
            <h2 className="weather-name">{props.weatherMain}<span className="weather-description">{props.weatherDesc}</span></h2>
            <div className="date">{dateStr}</div>
        </div>
    )
}

// "https://img.icons8.com/arcade/45/000000/experimental-marker-arcade.png"