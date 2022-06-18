function maths(a) {
    var num1=document.querySelector("#num1").value;
    var num2=document.querySelector("#num2").value;
    if (a=='add') {
        alert(parseInt(num1)+parseInt(num2));
    }
    else if (a=='sub') {
        alert(parseInt(num1)-parseInt(num2));
        
    }
    else if (a=='mul') {
        alert(parseInt(num1)*parseInt(num2));
        
    }
    else  {
        alert(parseInt(num1)/parseInt(num2));
        
    }
}
// for loop
for(var i=0;i<10;i++){
console.log(i);
}
for(var i=10;i>0;i--){
    console.log(i);
}
 var nameArr=["shashank","prathmesh","abc","xyz"]
 console.log(nameArr[0]);
 for(var i=0;i<nameArr.length;i++){
    console.log(nameArr[i]);
 }
 var movies=[{name:"xyz",rating:4.4},{name:"abc",rating:4.5},{name:"pqr",rating:2.4}]
 for(var i=0;i<movies.length;i++){
    console.log(movies[i].name);
 }
 //iterables
 for(var item of movies){
    console.log(item);
 }
