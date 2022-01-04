const a = 5;

function b() { 
    c();
}

function c() {
    d()
}

function d() { 
    console.log(a);
}

setTimeout(() => {
    console.log('timeout')
}, 1200);

b();

