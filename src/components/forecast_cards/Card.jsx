import './Card.css'

export default function Card(props) {
    const time = (props.time == '00' ? `12 am`: 
        props.time < 12 ? `${props.time} am`: 
        props.time == 12 ? `12 pm`: 
        `${props.time-12} pm`)

    return (
        <div className="card">
            <h3 className="time">{time}</h3>
            <img src={props.cardImg} alt="Weather Image" className='card--weather--img'/>
            <div className="card--weather">{props.weather}</div>
            <div className="card--temp">{props.temp}°C</div>
        </div>
    )
}