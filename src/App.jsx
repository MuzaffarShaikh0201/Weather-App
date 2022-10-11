import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Forecast from './components/Forecast'
import Main from './components/Main'
import Loading from './loading_animations/Loading'

function App() {
    const [coordinates, setCoordinates] = useState([])
    const [isCoords, setIsCoords] = useState(false)
    const stop = 0

    function getCoords() {
        function success(pos) {
            var crd = pos.coords;
            var lat = crd.latitude.toString();
            var lng = crd.longitude.toString();
            setCoordinates([lat, lng])
            setIsCoords(true)
        }
        function error(err) {
            console.log(`ERROR(${err.code}): ${err.message}`);
            setIsCoords(true)
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }

    useEffect(() => {
        getCoords()
    }, [stop])
  

    if (!isCoords) {
        return <Loading />
    } else {
        return (
            <div className='app-container'>
                <Navbar 
                    lat={coordinates[0]}
                    lon={coordinates[1]}
                />
                <Main 
                    lat={coordinates[0]}
                    lon={coordinates[1]}
                />
                <Forecast 
                    lat={coordinates[0]}
                    lon={coordinates[1]}
                />
            </div>
        )
    }
}

export default App