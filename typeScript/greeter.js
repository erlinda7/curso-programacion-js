function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Erlinda", lastName: "Chambi" };
//document.body.textContent=greeter(user);
console.log(greeter(user));
