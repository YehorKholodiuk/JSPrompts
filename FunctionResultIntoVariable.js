function greeting(name){
    const message = 'Hello ' + name + '!';
    return message;
}
const personName1 = 'Alice';
const personName2 = 'Bob';

const greetingPerson1 = greeting(personName1);
const greetingPerson2 = greeting(personName2);

console.log(greetingPerson1);
console.log(greetingPerson2);
