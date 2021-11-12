var events = require("events");
var util =require("util");

var Cars = function (model) {
    this.model = model;
}

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars("BMW");
var audy = new Cars("audy");
var volva = new Cars("volva");

var cars = [bmw, audy, volva];

cars.forEach(function (car) {
    car.on("speed", function (text) {
        console.log(car.model + " speed is - " + text);
    })
})

bmw.emit("speed", "2554 km");

// console.log(things.array_counter([1,2,3,70,30]));
// console.log(things.multiply(7, 3));
// console.log(things.some_value);