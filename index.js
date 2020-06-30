
//"#vid",{duration:1,height:"0vh",width:"0%",backfaceVisibility: "hidden" ,backgroundPosition:"topCenter",backgroundSize:"cover",objectFit:"cover"}

document.querySelector(".button-pro button").addEventListener("click",function(){
    document.querySelector(".card-container").classList.toggle("visible");
    document.querySelector(".para").classList.toggle("visible2");
    document.querySelector(".button-pro i").classList.toggle("rotate");
})



const year=new Date()
const CurrentYear=year.getFullYear();

const spanElement=document.getElementById("year");
spanElement.innerHTML=CurrentYear;

document.querySelector(".menu").addEventListener("click",()=>{
    if(document.querySelector(".pop").classList.contains("dis")){
        document.querySelector(".pop").classList.remove("dis")
        document.querySelector(".pop").classList.add("disappear");
    }
    document.querySelector(".pop").classList.add("disappear");
})

document.querySelector(".topo").addEventListener("click",()=>{
    document.querySelector(".pop").classList.add("dis");
})

const li=document.querySelectorAll(".pop ul li");
li.forEach(function(item){
    item.addEventListener("click",()=>{
        document.querySelector(".pop").classList.add("dis");
    })
})

//preloader
const pre=document.querySelector(".preloader");

window.addEventListener('load',function(){
    pre.classList.add("hide-pre");
})

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}