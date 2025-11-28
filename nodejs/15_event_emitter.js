const events = require('events');
var em = new events.EventEmitter(); //create Event Emitter type object
//create function 
em.addListener("error", function (code, description) {
    console.log('i am error event handler function 1.....');
    console.log(code, description);
});
em.on("error", function (code, description) {
    console.log("I am another error event handler function 2.....");
    console.log(code, description);
});
em.on("error", function (code, description) {
    console.log("I am 3rd error event handler function .....");
    console.log(code, description);
});

//above function will run automatically when error event triggered
em.emit("error", 1, "Techinal error due to operating system");
