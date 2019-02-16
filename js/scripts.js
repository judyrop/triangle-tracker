function submit(){
var length1=parseInt(document.getElementById("length1").value);
var length2=parseInt(document.getElementById("length2").value);
var length3=parseInt(document.getElementById("length3").value);

if(length1 + length2 >length3 &&length1 + length3 >length2 &&length3 + length2 >length1){
if(length1===length2 && length2===length3){
  alert("equilateral");
}

else if(length1===length2 || length1===length3 || length2===length3){
  alert("isosceles");
}
else if(length1!=length2 && length2!=length3 && length1!=length3){
  alert("scalene");
}
}

else{
  alert("Not a triangle")
}
}
