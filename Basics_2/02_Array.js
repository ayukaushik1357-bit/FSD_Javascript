const marvel = ["Thor","Hulk","IronMan"]
const Dc = ["superman","flash","Batman"]

//marvel.push(Dc);

/*console.log(marvel);
console.log(marvel[3][1]);*/

/*const allHero = marvel.concat(Dc);
console.log(allHero);*/

const allHeros = [...marvel, ...Dc]
console.log(allHeros);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
