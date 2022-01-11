import chalk from 'chalk';
import dedent from 'dedent-js';

class PrintLog { 
    constructor() { }

    error(err){
        console.log(chalk.bgRed('ERROR') + ' ' + err)
    };

    success(msg){
        console.log(chalk.bgGreen('SUCCESS') + ' ' + msg)
    }

    help(){
        console.log(
            dedent`${chalk.bgCyan('HELP')}
            For first run need save token write -t [API_KEY] (API_KEY should be get https://openweathermap.org/price) and city -s [CITY]
            Without params - show weather
            -s [CITY] set city
            -h for getting this help
            -t [API_KEY] for saving token`
        )
    }

    weather(data, icon) { 
        console.log(
            dedent`${chalk.bgYellow('Weather')} Weather in a city ${data.name}
            ${icon} ${data.weather[0].description};
            Temperature: ${data.main.temp} (feels like: ${data.main.feels_like});
            Pressure: ${data.main.pressure} Pa;
            Humidity: ${data.main.humidity} %;
            Speed of wind: ${data.wind.speed} ms;
            `
        )
    }

}



export default new PrintLog();
