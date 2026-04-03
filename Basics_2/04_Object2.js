//const tinder = new Object();

const tinderUser = {}  //Non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "ayus@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ayush",
            lastName: "kaushik"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}
console.log(obj3);


// When values comes from database
const users = [
    {
        id: "1",
        email: "ayu@gmail"
    },
    {
        id: "2",
        email: "ayu@gmail"
    },
    {
        id: "3",
        email: "ayu@gmail"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
    courseName: "JS in hindi",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);
//console.log(courseInstructor);
