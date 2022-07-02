const dogs = [{ name: 'snickers', age: 1 }, { name: 'panda', age: 8 }];
//regular 
console.log('Hello');
//interpolated
console.log('Hello i am a string', '💩');
//styeld 
// console.log('%c Hello i am a string', 'font-size:100px;', 'background:yellow ;', ' text-shadow: 10px 10px 0 black;');
// warning
console.warn('OH NOO');

// ERROR
console.error('shit!');
//INFO
console.info('hey my name is juna....');
//TESTING
const p = document.querySelector('p');
// console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clear
// console.clear('');
// veiwing DOM Elements
console.log(p);
console.dir(p);
console.clear();


//Grouping together 
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
console.count('panda');
console.count('puffy');

console.count('lete');
console.count('lode');
console.count('look');

// //timimg
// console.time('fetching data');
// fetch('')

//table
console.table(dogs);