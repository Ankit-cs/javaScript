const mysym = Symbol("key1");
const JsUser = {
    naam: "Ankit",
    fullname: "Ankit Kumar",
    age: 19,
    location: "Kanpur",
    email: "anki@gmail.com",
    isLoogedin: false,
    LastLoginDay: ["Monday", "Sunday"],
    [mysym]: "mykey1"
};

console.log(JsUser.email);
console.log(JsUser.location);
console.log(JsUser);

JsUser.email = "Sonali@gmail.com";
console.log(JsUser.email);

// Object.freeze(JsUser);

JsUser.email = "hutgg@gmail.com";
console.log(JsUser.email);

console.log(typeof mysym);

JsUser.greeting = function () {
    console.log("Hola, JavaScript User!");
};

JsUser.greeting();

JsUser.greetingTwo = function () {
    console.log(`Hello there, ${this.naam}`);
};

JsUser.greetingTwo();
