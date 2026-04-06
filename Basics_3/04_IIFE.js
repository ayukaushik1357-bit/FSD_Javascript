// Immediately invoked Function Expression(IIFE)
// Global scope ke pollution se bachne ke liye use krte ha
// Function ko direct call krega

//Named IIFI
(function chai(){
    console.log(`DB Connected`);
})();

//Unnamed IIFI
( (name) => {
    console.log(`DB Connected Again ${name}`);
})("Ayush");