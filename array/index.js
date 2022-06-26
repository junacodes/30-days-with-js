//Our data
const pepole = [

    { name: 'Wes', year: 1988 },
    { name: 'Kiat', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
]

const comments = [
    { text: 'Love this', id: 523423 },
    { text: 'super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Bice Nice Nice!', id: 52328 }
];
//some:at least one 
const isAudlt = pepole.some((person) => {
    currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});
console.log(isAudlt);
// console.log(isAudlt);
//like filter but returns only one we are looking for
const comment = comments.findIndex((comment) => comment.id === 823423);
console.log(comment);

// remove element from the array
// comments.splice(index, 1);
console.log(comments);