console.log('hello word !');
// string

var nom : string = 'julien';

console.log("1ere valeur",nom);

var x : any = 25;
console.log("2ere valeur", x);

x:false;
console.log('3ere valeur', x);

var y : [string,boolean] = ['jule',true];
console.log(" valeur de y =", y);
//type multiple
var z : string | number;
z=5;
console.log("1ere valeur de z ", z);
z='coucou tous le monde';
console.log("2ere valeur de z ", z);
// object comme type
var data :{
    nom: string;
    age : number;
    marie: boolean;
};
data = {
 nom: 'caline',
 age:45,
 marie: true,
};
console.log("valeur datta", data);

// fonction comme type
var myfunction: (nom:string,age: number)=> number;
myfunction= function(nom,age){
    return age+2;
}
console.log('ma function est ', myfunction('walter',25));
//nos propres type
type mafunction =(nom:string,age:number) =>number;
 var funct :mafunction= function(name , age): number {
 return age*2
 }
 console.log('ma function 2 est ', funct('walter',25));
// array

var tabl : number[];
  tabl =[0,2,5,9];
  var tabl2 :(number | string)[];
  tabl2 = ['walter',2,5,'tibau'];

  // les interfaces 
  //formules

  /* interface nom_interface {
      prop: x;
      prop2;
      methodes (argument)
  }*/
  interface status {
      nom : string;
      age : number;
      marie : boolean;
      nbreEnfant  : number;
      salary (age:number , enfant :number) : number;
  }
  var monstatus :status ={
      nom: 'walter',
      age: 45,
      marie: false,
      nbreEnfant : 2,
      salary : function(x:number, y:number) : number{
          return x*y;
      }
  };
  var  monstatus2 : status = {
      
      nom: 'walter',
      age: 45,
      marie: false,
      nbreEnfant  : 1,
      salary : function(x:number, y:number) : number{
          return x*y;
      }
  }

  // les classes

  class user {
      nom : string;
      email : string ;
      password : string;
      age : number;
      isloggen : boolean;
      constructor (nom : string, email : string,age : number){
          console.log("je suis le costructeur de classe user");
         this.createuser();
      }
      createuser() : void {
          this.nom = 'tiabut';
          this.password = 'admin';
          this.age = 25;
          this.email= 'cahdonette@gmail';
      }
  }
let muser = new user ('walter','cahdonettzt@gamil.com',25);
console.log('myuser est', muser);