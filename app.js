// const fs = require('fs');
// const { characters, stealRing } = require('./characters');


// const data = fs.readFileSync('./data.txt');

// newChar = stealRing(characters, 'Bilbo')

// console.log(characters);
// console.log(newChar);

// const EventEmmiter = require('events');


// const myEmmitter = new EventEmmiter();

// const logDb = () => { 
//     console.log('DB connected');
// }

// myEmmitter.addListener('connected', logDb);
// myEmmitter.emit('connected');

// // Отписка от слушателя события

// myEmmitter.removeListener('connected', logDb); // удаляет слушателя 
// //myEmmitter.off('connected', logDb); // удаляет слушателя 
// //myEmmitter.removeAllListeners('connected'); // удяляет всех слушателей союытия "connected" с myEmmitter

// myEmmitter.emit('connected');

// myEmmitter.on('msg', (data) => console.log(`Sent a ${data}`));
// myEmmitter.on('ddd', (data) => console.log(`Sent a ${data}`));
// myEmmitter.on('ccc', (data) => console.log(`Sent a ${data}`));

// myEmmitter.emit('msg', 'Hi, i send your my messeges');
// myEmmitter.emit('ddd', 'Hi, i send your my messeges');
// myEmmitter.emit('ccc', 'Hi, i send your my messeges');

// myEmmitter.once('off', () => console.log('Once call')) //Вызывается только один раз

// myEmmitter.emit('off');
// myEmmitter.emit('off');// не сработаеты

// console.log(myEmmitter.getMaxListeners()); // устанавливаем максимальное количество слушателей, по умолчанию 10
// console.log(myEmmitter.listenerCount('msg')); // количество слушателей на событие msg
// console.log(myEmmitter.eventNames().length);

// myEmmitter.on('error', (err) => { 
//     console.log(`Erros messege:${err.message}`);
// })

// myEmmitter.emit('error', new Error('Big bada BOOOM!'));



// Event Target

const logTarget = () => {
    console.log('Target to be');
};

const target = new EventTarget();



target.addEventListener('connected', logTarget);

target.dispatchEvent(new Event('connected'));