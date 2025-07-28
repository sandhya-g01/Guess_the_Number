//selecting elements
var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guess=document.getElementById("guess")
var noofguess=3

//Generate random number from 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1  //1 to 10
if (randomnumber>5)
{
    randomnumber=randomnumber-5
}

//Event Handler Function
function checkthenumber()
{
    if(inputBox.value==randomnumber)
    {
        alert("You got it Right ,Congrats..!,The Random number is:"+randomnumber)
        result.textContent="You are Right...!"
    }
    else
    {
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You lost,Generated Random number is:"+randomnumber)
            result.textContent="You are Wrong..!"
        }
        guess.textContent="Available Guesses:"+noofguess
    }
}