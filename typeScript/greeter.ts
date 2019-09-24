interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){  //variable : tipo de variable 
    return "Hello, " +person.firstName + " " + person.lastName;
}

let user={firstName: "Erlinda", lastName: "Chambi"};

//document.body.textContent=greeter(user);
console.log(greeter(user));