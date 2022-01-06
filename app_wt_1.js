const factorial = require('./factorial');

const foo = (array) => { 
    const arr = [];
    for (let i = 0; i < 100000000; i++) { 
        arr.push(i * i);
    };

    return array.map(item => factorial(item));
}



const main = () => {
    performance.mark('start');

    const result = [
        foo([25, 20, 19, 30, 40]),
        foo([25, 20, 19, 30, 40]),
        foo([25, 20, 19, 30, 40]),
        foo([25, 20, 19, 30, 40]),

    ];

    console.log(result);

    performance.mark('end');

    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
}

main();