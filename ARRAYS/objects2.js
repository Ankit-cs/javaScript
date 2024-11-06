const tenda=new Object()//--> it is singleton
console.log(tenda);//-->it will give epmty set
const tenda1={

    id:"123aabcd",
     naam:"Maqsad mohmad",
     isLoggedIn:false
}// -->it is not a singleton
console.log(tenda1.id);
console.log(tenda1);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign(obj1,obj2)
console.log(obj3);
console.log(obj3===obj1);
const obj={...obj1,...obj2,...obj3}
console.log(obj );



