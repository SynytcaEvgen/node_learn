const fs = require('fs');

const timeSet = 100;
console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'timer 0sec')
}, timeSet);

setImmediate(() => { 
    console.log("Immediate")
})

fs.readFile(__filename, () => {
    console.log('file readed')
});

setTimeout(() => { 
    for (let i = 0; i < 1e6; i++) { 

    }
    console.log('Loop done');
}, 0)

Promise.resolve().then(() => console.log('Promice'));

process.nextTick(()=> console.log('tick'))

console.log('Final');
