function deleteme(){
    document.getElementById("result").value="";
}
function answer(){
    var a=document.getElementById("result").value;
    var b=eval(a);
    document.getElementById("result").value=b;
}
function calculator(val){
    document.getElementById("result").value+=val;
}
