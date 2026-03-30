import axios from "axios";
import 'dotenv/config'


const getWeather = async (state: string) => {
    try {
        const resCurrent = await axios.get(`https://api.weatherapi.com/v1/forecast.json&current.json?key=${process.env.API_KEY}&q=${state}`)

        const weatherData = resCurrent.data;
        const weatherCurrent = weatherData.current;
        const weatherForecast = weatherData.forecast.forecastday[0];
        const weatherDay = weatherForecast.day;
        const weatherDuringDay = weatherForecast.hour
        const weather = {
            currentTemperature: weatherCurrent.temp_c,
            temperatureMax: weatherDay.maxtemp_c,
            temperatureMin: weatherDay.mintemp_c,
            feels_like: weatherCurrent.feelslike_c,
            currentHumidity: weatherCurrent.humidity,
            currentWindSpeed: weatherCurrent.wind_kph,
            currentPressure: weatherCurrent.pressure_mb,
        }
        return { weather, weatherDuringDay };
    } catch (error) {
        console.error("Erro ao obter os dados meteorológicos:", error);
        return null;
    }

}

export default getWeather