import { WiThermometer } from "react-icons/wi";

export default function WeatherDeatails(props) {
    return (
        <div className="weather-details">
            <div className="main-temp">
                <WiThermometer className="thermometer"/>
                <div className="temp">{Math.round(props.mainTemp)}<span>°C</span></div>
            </div>
            <div className="temp-details">
                <div className="temp-detail">
                    <table>
                        <tbody>
                            <tr>
                                <th className="table-name" scope="row">feels like:</th>
                                <td className="table-value">{props.feelTemp}°C</td>
                            </tr>
                            <tr>
                                <th className="table-name" scope="row">max_temp:</th>
                                <td className="table-value">{props.tempMax}°C</td>
                            </tr>
                            <tr>
                                <th className="table-name" scope="row">min_temp:</th>
                                <td className="table-value">{props.tempMin}°C</td>
                            </tr>
                            <tr>
                                <th className="table-name" scope="row">humidity:</th>
                                <td className="table-value">{props.humidity}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="temp-detail">
                    <table>
                        <tbody>
                            <tr>
                                <th className="table-name" scope="row">clouds:</th>
                                <td className="table-value">{props.clouds}%</td>
                            </tr>
                            <tr>
                                <th className="table-name" scope="row">visibility:</th>
                                <td className="table-value">{props.visiblity}m</td>
                            </tr>
                            <tr>
                                <th className="table-name" scope="row">wind speed:</th>
                                <td className="table-value">{props.windSpeed}m/s</td>
                            </tr>
                            <tr>
                                <th className="table-name" scope="row">wind dir:</th>
                                <td className="table-value">{props.windDir} deg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}