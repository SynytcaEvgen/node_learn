process.on('message', (msg) => {
    if (msg == 'disconnect') { 
        process.disconnect();
        return;
    }
    console.log(`Coustomer sent some - ${msg}`);
    process.send('Pong!');
});
