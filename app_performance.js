const perf_hooks = require('perf_hooks');


const perf_Observer = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    // console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect;
});

test = perf_hooks.performance.timerify(test);
perf_Observer.observe({ entryTypes: ['measure', 'function'] });

// console.log(perf_Observer);



function test() { 
    let arr = [];
    for (let i = 0; i < 100000; i++) { 
        arr.push(i * i);
    }
};

function slow() {
    performance.mark('start');
    let arr = [];
    for (let i = 0; i < 100000; i++) { 
        arr.push(i * i);
    }
    performance.mark('end');
    performance.measure('slow', 'start', 'end');
};

slow();
test();