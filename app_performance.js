const a = 6;

function slow() {
    
    let arr = [];
    for (let i = 0; i < 100000; i++) { 
        arr.push(i * i);
    }
}

slow();