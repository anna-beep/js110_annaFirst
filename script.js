//write first method
function sleep_in(weekday,vacation) {
    var okay = vacation| (!weekday);
    return okay;
}

//write second method
function monkey_trouble(param1, param2) {
    var trouble =  (param1&&param2)|((!param1)&&(!param2)) ;
    return trouble;
}

function string_times(string, n){
    var length = "";
    for (var i=n; i>0; i--){
        length = string+length;
    }
    return (length);
}

function front_times(string, n){
    var length = ""
    var sub = string.substring(0,3);

    for (var i=n; i>0; i--){
        length = sub+length;
    }
    return (length);
}

function string_bits(string){
    var length = ""
    for (var i=0; i< string.length; i=1+2){
        if(i%2==0){
            length += string.substring(i,i+1)
        }
    }
    return (length);
}

function caughtSpeeding(speed, birthday){
    var okay = "";
    if (birthday == true){
        speed -=5
    }
    if (speed <=60 ){
        okay = 0
    } else if (speed >= 61 && speed <= 80){
        okay = 1
    } else if (speed >= 81){
        okay = 2
    }
    return(okay);
}

function fizz_buzz(num){
    var name = "";
    if (num%5==0 && num%3==0) {
        name = "FizzBuzz"
    } else if (num%5==0){
        name = "Buzz"
    } else if (num%3==0){
        name = "Fizz"
    } else {
        name = num + "!"
    }
    return(name);
}

function teaParty(tea, candy) {
    var outcome = "";
    if (tea <5 || candy <5) {
        outcome = 0
    } else if ((tea >= 2*candy) || (candy >= 2*tea)){
        outcome = 2
    } else {
        outcome = 1
    }
    return(outcome);
}

function blackjack (one, two) {
    var outcome = "";
    if (one> 21){
        one = 0
    }
    if (two>21) {
        two = 0
    }
    if (two>one) {
        outcome = two
    }else {
        outcome = one
    }
    return (outcome);
}


function loneSum(a,b,c){
    var aa = a;
    var bb = b;
    var cc = c;
    if (a==b || a ==c){
        var aa= 0
    }
    if (b==a || b==c){
        var bb=0
    }
    if (c==b || c==a){
        var cc=0
    }
    var sum = aa+bb+cc;
    return (sum);
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(Hello, 3);
    document.getElementById("output").innerHTML += front_times(Hello, 2);
    document.getElementById("output").innerHTML += string_bits(Hello);
    document.getElementById("output").innerHTML += caughtSpeeding(75, true);
    document.getElementById("output").innerHTML += fizz_buzz(15);
    document.getElementById("output").innerHTML += teaParty(2,8);
    document.getElementById("output").innerHTML += blackjack(19,22);
    document.getElementById("output").innerHTML += loneSum(9,22,22);
}












