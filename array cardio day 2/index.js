//arry cardio day 2
const pepole = [
    { name: 'Wes', year: 1998 },
    { name: 'Kat', year: 1997 },
    { name: 'Irav', year: 1995 },
    { name: 'Lux', year: 2016 }


];
const comments = [
    { text: 'Love this!', Id: 205786 },
    { text: 'Super good', Id: 406796 },
    { text: 'You are the best', Id: 702580 },
    { text: 'Ramen is my fav food', Id: 845032 },
    { text: 'NICE NICE NICE!', Id: 325415 },



];
// SOME AND EVERY CHECKS
// ARRAY.PROTOTYPE.SOME()  // IS AT LEAST ON PERSON 19 OR OLDER?

const isAdult = pepole.some(person => {
    const currentYear = (new Date().getFullYear());
    if (currentYear - person.year >= 19) {
        return true;

    }
});
const isAdult2 = pepole.some(person => (new Date().getFullYear()) - person.year >= 19);
console.log(isAdult);
console.log(isAdult2);
//FIND THE COMMENT WITH ID OF 85465
const comment = comments.find(comment => comment.id == 85465);

console.log(comment);


const commentIndex = comments.findIndex(comment => comment.id == 85465);
console.log(commentIndex);

const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
]
console.table(comments);
console.table(newComments);
