import EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("st", (x) => {
  console.log(`started ${x}`);
});

eventEmitter.emit('st', 'thisAction');