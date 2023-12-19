// constante et variable

const toggle = document.getElementById('light-dark')
link = document.getElementsByClassName("lien")

let i = 0;

toggle.addEventListener('click', ()=>{
    if(i%2 == 0){
        toggle.src = "asset/sun-white.svg"
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        document.getElementById('section2').style.backgroundColor = "#c24e88"
        for (var j=0 ; j<link.length ;j++){
            link[j].style.color="white";
        }
    }
    else{
        toggle.src = "asset/moon-svgrepo-com.svg"
        document.body.style.backgroundColor= "white"
        document.body.style.color = "black"
        document.getElementById('section2').style.backgroundColor = "rgb(244, 218, 222)"
        for (var j=0 ; j<link.length ;j++){
            link[j].style.color="black";
        }
    }
   i++
})