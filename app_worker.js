const factorial = require('./factorial');
const { Worker } = require('worker_threads');

const foo = (array) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        })
        worker.on('message', (msg) => {
            console.log(worker.threadId)
            res(msg)
        })

        worker.on('error', (err) => { 
            rej(err);
        })

        worker.on('exit', () => { 
            console.log('Work finish');
        })
    })
};

const main = async () => {
    
    try {
        performance.mark('start');
    
        const result = await Promise.all([
            foo([25, 20, 19, 30, 40]),
            foo([25, 20, 19, 30, 40]),
            foo([25, 20, 19, 30, 40]),
            foo([25, 20, 19, 30, 40]),
    
        ]);
    
        console.log(result);
    
        performance.mark('end');
    
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());

    } catch (err) { 
        console.error(err.message)
    }
}

main();