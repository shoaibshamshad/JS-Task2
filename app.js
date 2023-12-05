var names = prompt("enter a name");
var word = "";
for (var i = names.length-1; i >= 0; i--) {
    console.log(names[i])
    word = word+ names[i]
}
if(names==word){
    alert("this ia palindrome")
    
}
else{
    alert("not a palindrome")
    
}