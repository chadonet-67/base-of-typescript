console.log('hello word !');
// string
var nom = 'julien';
console.log("1ere valeur", nom);
var x = 25;
console.log("2ere valeur", x);
x: false;
console.log('3ere valeur', x);
var y = ['jule', true];
console.log(" valeur de y =", y);
//type multiple
var z;
z = 5;
console.log("1ere valeur de z ", z);
z = 'coucou tous le monde';
console.log("2ere valeur de z ", z);
// object comme type
var data;
data = {
    nom: 'caline',
    age: 45,
    marie: true
};
console.log("valeur datta", data);
// fonction comme type
var myfunction;
myfunction = function (nom, age) {
    return age + 2;
};
console.log('ma function est ', myfunction('walter', 25));
var funct = function (name, age) {
    return age * 2;
};
console.log('ma function 2 est ', funct('walter', 25));
// array
var tabl;
tabl = [0, 2, 5, 9];
var tabl2;
tabl2 = ['walter', 2, 5, 'tibau'];
var monstatus = {
    nom: 'walter',
    age: 45,
    marie: false,
    nbreEnfant: 2,
    salary: function (x, y) {
        return x * y;
    }
};
var monstatus2 = {
    nom: 'walter',
    age: 45,
    marie: false,
    nbreEnfant: 1,
    salary: function (x, y) {
        return x * y;
    }
};
// les classes
var user = /** @class */ (function () {
    function user(nom, email, age) {
        console.log("je suis le costructeur de classe user");
        this.createuser();
    }
    user.prototype.createuser = function () {
        this.nom = 'tiabut';
        this.password = 'admin';
        this.age = 25;
        this.email = 'cahdonette@gmail';
    };
    return user;
}());
var muser = new user('walter', 'cahdonettzt@gamil.com', 25);
console.log('myuser est', muser);
