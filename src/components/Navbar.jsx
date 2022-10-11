import logo_img from '../assets/icons8-weather-48.png'

export default function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <img src={logo_img} className="logo--img" alt="." />
                <h3 className="logo--text">Weather App</h3>
            </div>
            {/* <ul>
                <a href={`https://www.ventusky.com/?p=${props.lat};${props.lon};8`} className="link">Map</a>
                <a href="" className="link">About</a>
                <a href="" className="link">Contact</a>
            </ul> */}
            <input type="text" className="search" placeholder="Search City"/>
        </nav>
    )
}

// "https://img.icons8.com/fluency/48/000000/weather.png"