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
             Without params - show weather
             -s [CITY] set city
             -h for getting this help
             -t [API_KEY] for saving token
            `
        )
    }

}



export default new PrintLog();
