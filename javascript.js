var a = document.querySelector("body")

var b = document.querySelector("svg")

var c = document.querySelector("ul")

var flag = 0;

b.addEventListener("click", function(){
    if (flag == 0){
        a.style.backgroundColor = "black"
        a.style.color = "white"
        b.style.color = "black"
        // c.style.backgroundColor = "black"
        c.style.color = "white"
        flag = 1
    }else{
        a.style.backgroundColor = "transparent"
        a.style.color = "black"
        // c.style.color = "white"
        flag = 0
    }
})