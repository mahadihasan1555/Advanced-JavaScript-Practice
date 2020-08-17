//Apply map, filter, find on an array of objects

const students = [
    {id: 12, name: "mahadi"},
    {id: 13, name: "jahid"},
    {id: 14, name: "sahid"},
    {id: 15, name: "nahid"}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
console.log(names);
console.log(ids);

const bigger = students.filter(s => s.id > 13);
console.log(bigger);

const firstBigger = students.find(s => s.id > 14);
console.log(firstBigger);