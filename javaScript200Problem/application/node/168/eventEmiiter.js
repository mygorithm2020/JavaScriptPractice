const Emitter = require("events");
const eventConfig = require("./config").events;
const em = new Emitter();

console.log(eventConfig.GREET);
em.on(eventConfig.GREET, () => {
    console.log("Somewhere, someone said hello");
});

em.on(eventConfig.GREET, ()=> {
    console.log("A Greeting occurred!");
});

em.emit(eventConfig.GREET);