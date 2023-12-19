//JAVASCRIPT STUDY PART 2
console.log("THIS PART IS PART 2 OF JAVASCRIPT STUDY");
/*
//HYPOTENUS CALC PRACTICE - window prompt
let a;
let b;
let ans;
a = window.prompt("Enter the side a");
a = Number(a);
b = window.prompt("Enter the side b");
b = Number(b);
ans = Math.pow(a, 2) + Math.pow(b, 2);
console.log("The value of hypotenus: ", ans);*/
//HYPOTENUSE CALC PRACTICE - user input label
let c;
let d;
let ans1;
document.querySelector("#button").onclick = addButton; 
document.querySelector("#button2").onclick = subtractButton;
document.querySelector("#button3").onclick = timesButton;
document.querySelector("#button4").onclick = divideButton;
document.querySelector("#button5").onclick = moduloButton;
document.querySelector("#resetButton").onclick = resetButton;


function addButton(){
    c = document.querySelector("#atext").value;
    c = Number(c);
    d = document.querySelector("#btext").value;
    d = Number(d);
    ans1 = c + d;                 

    document.querySelector("#label").innerHTML = "The Answer:" + ans1;
    
}

function subtractButton(){
    c = document.getElementById("atext").value;
    c = Number(c);
    d = document.getElementById("btext").value;
    d = Number(d);
    ans1 = c - d;                 

    document.getElementById("label").innerHTML = "The Answer:" + ans1;
  }


function timesButton(){
    c = document.getElementById("atext").value;
    c = Number(c);
    d = document.getElementById("btext").value;
    d = Number(d);
    ans1 = c * d;                 

    document.getElementById("label").innerHTML = "The Answer:" + ans1;
}

 function divideButton(){
    c = document.getElementById("atext").value;
    c = Number(c);
    d = document.getElementById("btext").value;
    d = Number(d);
    ans1 = c / d;                 

    document.getElementById("label").innerHTML = "The Answer:" + ans1;
}
 function moduloButton(){
    c = document.getElementById("atext").value;
    c = Number(c);
    d = document.getElementById("btext").value;
    d = Number(d);
    ans1 = c % d;                 

    document.getElementById("label").innerHTML = "The Answer:" + ans1;
}
 function resetButton(){

    document.getElementById("label").innerHTML = "The Answer:0";
}

//COUNT PROGRAM PRACTICE
let count = 0;
document.getElementById("decBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;     
}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;  
}
document.getElementById("incBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;  
}