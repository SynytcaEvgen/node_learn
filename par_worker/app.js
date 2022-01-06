const { Worker } = require('worker_threads');
const { performance, PerformanceObserver } = require('perf_hooks');
const { fork } = require('child_process');


// const performanceObserver = new PerformanceObserver((items) => {
// 	items.getEntries().forEach((entry) => {
// 		console.log(`${entry.name}: ${entry.duration}`);
// 	});
// });
// performanceObserver.observe({ entryTypes: ['measure'] });

const workerFunction = (array) => { 
    return new Promise((res, rej) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        });

        worker.on('message', (msg) => {
            res(msg)
        });

        worker.on('error', (err) => {
            rej(err);
        });

        worker.on('exit', () => {
            console.log('Work worker finish');
        });
    });
}

const forkFunction = (array) => { 
    return new Promise((res, rej) => {
        const forkProcess = fork('./fork.js');

        forkProcess.send({ array });

        forkProcess.on('message', (msg) => {
            res(msg);
        });

        forkProcess.on('error', (err) => {
            rej(err);
        });

        forkProcess.on('exit', () => {
            console.log('Work fork finish');
        });

    });
}

const main = async () => {
    try {
        performance.mark('start');
        await workerFunction([25, 19, 48, 50, 60, 70]);
        performance.mark('end');
    
        performance.measure('main_worker', 'start', 'end');
        console.log(performance.getEntriesByName('main_worker').pop());
    } catch(err) { 
        console.log(err.message);
    }

    try {
        performance.mark('start');
        await forkFunction([25, 19, 48, 50, 60, 70]);
        performance.mark('end');
        performance.measure('main_fork', 'start', 'end');
        console.log(performance.getEntriesByName('main_fork').pop());
    } catch(err) { 
        console.log(err.message);
    }
    
}

main();