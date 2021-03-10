// functions.js
const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

const sayHello = (name) => {
    if (name === 'Will') {
        return `No more testing Will!`
    } else {
        return `Hi there ${name}!`
    }
}

const buildCar = (color, type) => {
    var car = {}
    if (color || type) {
        car.type = type
        car.color = color
    } 
    return car
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
