import axios from "axios"

export async function handler (event, context) {
    const {lat, lng} = event.queryStringParameters
    const API_KEY = process.env.API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    
    try {
        const {data} = await axios.get(url)
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: status,
            body: JSON.stringify({status, statusText, headers, data})
        }
    }
}

export default {handler}